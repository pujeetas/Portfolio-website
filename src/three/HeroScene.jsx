import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const ACCENT_A = new THREE.Color("#818cf8"); // indigo
const ACCENT_B = new THREE.Color("#22d3ee"); // cyan

/* Seeded PRNG (mulberry32) — keeps render pure and particle layout stable */
function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* Constellation network — drifting nodes, nearest-neighbour edges, and light
   pulses travelling along the connections (reads as "systems" / "connections") */
function Network({ count = 46, neighbors = 3, spread = 3.2 }) {
  const pointsRef = useRef();
  const linesRef = useRef();
  const pulsesRef = useRef();

  const { basePositions, colors, edges, phases } = useMemo(() => {
    const rand = mulberry32(2024);
    const base = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const c = new THREE.Color();
    const pts = [];
    for (let i = 0; i < count; i++) {
      const x = (rand() - 0.5) * spread * 2;
      const y = (rand() - 0.5) * spread * 1.2;
      const z = (rand() - 0.5) * spread;
      base.set([x, y, z], i * 3);
      pts.push(new THREE.Vector3(x, y, z));
      c.copy(ACCENT_A).lerp(ACCENT_B, rand());
      col.set([c.r, c.g, c.b], i * 3);
    }

    // Connect each node to its nearest neighbours, deduped as undirected edges
    const edgeSet = new Set();
    const edgeList = [];
    for (let i = 0; i < count; i++) {
      const dists = [];
      for (let j = 0; j < count; j++) {
        if (i === j) continue;
        dists.push([j, pts[i].distanceTo(pts[j])]);
      }
      dists.sort((a, b) => a[1] - b[1]);
      for (let k = 0; k < neighbors; k++) {
        const j = dists[k][0];
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;
        if (!edgeSet.has(key)) {
          edgeSet.add(key);
          edgeList.push([i, j]);
        }
      }
    }

    const phase = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) phase[i] = rand() * Math.PI * 2;

    return { basePositions: base, colors: col, edges: edgeList, phases: phase };
  }, [count, neighbors, spread]);

  const liveNodePos = useMemo(
    () => new Float32Array(basePositions),
    [basePositions]
  );
  const linePositions = useMemo(
    () => new Float32Array(edges.length * 2 * 3),
    [edges]
  );

  const pulseCount = Math.min(14, edges.length);
  const pulseEdgeIdx = useMemo(() => {
    const rand = mulberry32(99);
    return new Array(pulseCount)
      .fill(0)
      .map(() => Math.floor(rand() * edges.length));
  }, [edges, pulseCount]);
  const pulseOffsets = useMemo(() => {
    const rand = mulberry32(55);
    return new Array(pulseCount).fill(0).map(() => rand());
  }, [pulseCount]);
  const pulsePositions = useMemo(
    () => new Float32Array(pulseCount * 3),
    [pulseCount]
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Gentle drift per node
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      liveNodePos[ix] = basePositions[ix] + Math.sin(t * 0.25 + phases[ix]) * 0.12;
      liveNodePos[ix + 1] =
        basePositions[ix + 1] + Math.cos(t * 0.2 + phases[ix + 1]) * 0.1;
      liveNodePos[ix + 2] =
        basePositions[ix + 2] + Math.sin(t * 0.18 + phases[ix + 2]) * 0.12;
    }
    if (pointsRef.current) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Edges follow the drifting nodes
    edges.forEach(([a, b], idx) => {
      const ai = a * 3;
      const bi = b * 3;
      const li = idx * 6;
      linePositions[li] = liveNodePos[ai];
      linePositions[li + 1] = liveNodePos[ai + 1];
      linePositions[li + 2] = liveNodePos[ai + 2];
      linePositions[li + 3] = liveNodePos[bi];
      linePositions[li + 4] = liveNodePos[bi + 1];
      linePositions[li + 5] = liveNodePos[bi + 2];
    });
    if (linesRef.current) {
      linesRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Light pulses travelling along a subset of edges
    for (let p = 0; p < pulseCount; p++) {
      const [a, b] = edges[pulseEdgeIdx[p]];
      const progress = (t * 0.35 + pulseOffsets[p]) % 1;
      const ai = a * 3;
      const bi = b * 3;
      const pi = p * 3;
      pulsePositions[pi] = THREE.MathUtils.lerp(
        liveNodePos[ai],
        liveNodePos[bi],
        progress
      );
      pulsePositions[pi + 1] = THREE.MathUtils.lerp(
        liveNodePos[ai + 1],
        liveNodePos[bi + 1],
        progress
      );
      pulsePositions[pi + 2] = THREE.MathUtils.lerp(
        liveNodePos[ai + 2],
        liveNodePos[bi + 2],
        progress
      );
    }
    if (pulsesRef.current) {
      pulsesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#6366f1" transparent opacity={0.18} />
      </lineSegments>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[liveNodePos, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.09}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <points ref={pulsesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pulsePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#e0f2fe"
          transparent
          opacity={0.95}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

/* Distant static stars for depth */
function Starfield({ count = 900 }) {
  const positions = useMemo(() => {
    const rand = mulberry32(7331);
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos.set(
        [(rand() - 0.5) * 22, (rand() - 0.5) * 14, -4 - rand() * 8],
        i * 3
      );
    }
    return pos;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#52525b"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* Wireframe hub at the centre the network reads as "connecting to" */
function Core() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y -= delta * 0.1;
    ref.current.rotation.x += delta * 0.04;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[0.6, 1]} />
        <meshBasicMaterial
          wireframe
          color="#6366f1"
          transparent
          opacity={0.28}
        />
      </mesh>
      <mesh scale={0.55}>
        <icosahedronGeometry args={[0.6, 0]} />
        <meshBasicMaterial
          wireframe
          color="#22d3ee"
          transparent
          opacity={0.18}
        />
      </mesh>
    </Float>
  );
}

/* Pointer parallax, centered behind copy */
function Rig({ children }) {
  const ref = useRef();

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y = THREE.MathUtils.damp(
      ref.current.rotation.y,
      state.pointer.x * 0.3,
      2.5,
      delta
    );
    ref.current.rotation.x = THREE.MathUtils.damp(
      ref.current.rotation.x,
      -state.pointer.y * 0.2,
      2.5,
      delta
    );
  });

  return <group ref={ref}>{children}</group>;
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Starfield />
      <Rig>
        <Network />
        <Core />
      </Rig>
    </Canvas>
  );
}
