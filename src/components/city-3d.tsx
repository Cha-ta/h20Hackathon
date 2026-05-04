"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import type { InstancedMesh } from "three";

type City3DProps = {
  weatherState: string;
};

const PAL = {
  wallWarm: "#c9a574",
  wallStone: "#b8b3a8",
  wallDark: "#8a6f4a",
  roofBlue: "#3d4f6e",
  roofDark: "#26314a",
  windowGlow: "#ffd98a",
  woodTray: "#5c3e25",
  woodEdge: "#8a6235",
  stone: "#8e8a80",
  stoneEdge: "#74706a",
  bus: "#a32a2a",
  lamp: "#1a1a1a",
};

function makeWindowTexture(wallColor: string, glow = PAL.windowGlow, cols = 3, rows = 7) {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 128;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = wallColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const wW = canvas.width / (cols * 2);
  const wH = canvas.height / (rows * 2);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      ctx.fillStyle = Math.random() < 0.78 ? glow : "#2a2a30";
      ctx.fillRect(c * wW * 2 + wW * 0.5, r * wH * 2 + wH * 0.5, wW, wH * 1.4);
    }
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function ClockTower({ position }: { position: [number, number, number] }) {
  const winTex = useMemo(() => makeWindowTexture(PAL.wallWarm, PAL.windowGlow, 2, 6), []);
  return (
    <group position={position}>
      {/* Tall lit shaft */}
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.95, 3.0, 0.95]} />
        <meshStandardMaterial
          map={winTex}
          emissive="#ff9d40"
          emissiveMap={winTex}
          emissiveIntensity={0.55}
        />
      </mesh>
      {/* Cornice */}
      <mesh position={[0, 3.05, 0]} castShadow>
        <boxGeometry args={[1.05, 0.12, 1.05]} />
        <meshStandardMaterial color={PAL.wallDark} />
      </mesh>
      {/* Clock section */}
      <mesh position={[0, 3.4, 0]} castShadow>
        <boxGeometry args={[1.0, 0.6, 1.0]} />
        <meshStandardMaterial color={PAL.wallWarm} />
      </mesh>
      {/* Four clock faces */}
      {[
        { p: [0, 3.4, 0.501] as [number, number, number], r: [0, 0, 0] as [number, number, number] },
        { p: [0, 3.4, -0.501] as [number, number, number], r: [0, Math.PI, 0] as [number, number, number] },
        { p: [0.501, 3.4, 0] as [number, number, number], r: [0, Math.PI / 2, 0] as [number, number, number] },
        { p: [-0.501, 3.4, 0] as [number, number, number], r: [0, -Math.PI / 2, 0] as [number, number, number] },
      ].map((cf, i) => (
        <group key={i} position={cf.p} rotation={cf.r}>
          <mesh>
            <circleGeometry args={[0.22, 32]} />
            <meshStandardMaterial color="#fbf3d6" emissive="#fff5c0" emissiveIntensity={0.6} />
          </mesh>
          {/* Hands */}
          <mesh position={[0, 0.05, 0.001]}>
            <boxGeometry args={[0.015, 0.14, 0.005]} />
            <meshStandardMaterial color="#222" />
          </mesh>
          <mesh position={[0.06, 0, 0.001]} rotation={[0, 0, -Math.PI / 2]}>
            <boxGeometry args={[0.012, 0.1, 0.005]} />
            <meshStandardMaterial color="#222" />
          </mesh>
        </group>
      ))}
      {/* Pyramidal roof */}
      <mesh position={[0, 4.2, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[0.78, 1.4, 4]} />
        <meshStandardMaterial color={PAL.roofBlue} />
      </mesh>
      {/* Spire */}
      <mesh position={[0, 5.15, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 0.55, 6]} />
        <meshStandardMaterial color={PAL.roofDark} />
      </mesh>
      <mesh position={[0, 5.45, 0]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color="#ffd060" emissive="#ffd060" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function BridgeTower({ position }: { position: [number, number, number] }) {
  const winTex = useMemo(() => makeWindowTexture(PAL.wallStone, PAL.windowGlow, 2, 4), []);
  return (
    <group position={position}>
      {/* Stone base */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.9, 1.0, 0.9]} />
        <meshStandardMaterial color={PAL.wallStone} />
      </mesh>
      {/* Lit shaft */}
      <mesh position={[0, 1.55, 0]} castShadow>
        <boxGeometry args={[0.7, 1.1, 0.7]} />
        <meshStandardMaterial
          map={winTex}
          emissive="#ff9d40"
          emissiveMap={winTex}
          emissiveIntensity={0.5}
        />
      </mesh>
      {/* Cornice */}
      <mesh position={[0, 2.15, 0]} castShadow>
        <boxGeometry args={[0.85, 0.08, 0.85]} />
        <meshStandardMaterial color={PAL.wallStone} />
      </mesh>
      {/* Pyramid roof */}
      <mesh position={[0, 2.7, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[0.6, 1.0, 4]} />
        <meshStandardMaterial color={PAL.roofBlue} />
      </mesh>
      {/* Spire */}
      <mesh position={[0, 3.4, 0]}>
        <cylinderGeometry args={[0.018, 0.018, 0.35, 6]} />
        <meshStandardMaterial color={PAL.roofDark} />
      </mesh>
    </group>
  );
}

function Bridge({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <BridgeTower position={[-1.3, 0, 0]} />
      <BridgeTower position={[1.3, 0, 0]} />
      {/* Upper walkway */}
      <mesh position={[0, 2.0, 0]} castShadow>
        <boxGeometry args={[2.6, 0.18, 0.5]} />
        <meshStandardMaterial color={PAL.wallStone} />
      </mesh>
      <mesh position={[0, 1.85, 0]}>
        <boxGeometry args={[2.4, 0.12, 0.5]} />
        <meshStandardMaterial color={PAL.roofBlue} />
      </mesh>
      {/* Arched lower span (approximate with two side panels) */}
      <mesh position={[0, 0.55, 0.22]}>
        <boxGeometry args={[2.6, 1.0, 0.05]} />
        <meshStandardMaterial color={PAL.wallStone} />
      </mesh>
      <mesh position={[0, 0.55, -0.22]}>
        <boxGeometry args={[2.6, 1.0, 0.05]} />
        <meshStandardMaterial color={PAL.wallStone} />
      </mesh>
      {/* Suspension cables — diagonals from tower tops down to span */}
      {[-1.3, 1.3].map((dx) =>
        [-1, 1].map((dz) => (
          <mesh
            key={`${dx}-${dz}`}
            position={[dx + (dx > 0 ? -0.6 : 0.6), 1.3, dz * 0.22]}
            rotation={[0, 0, dx > 0 ? -0.55 : 0.55]}
          >
            <cylinderGeometry args={[0.018, 0.018, 1.4, 4]} />
            <meshStandardMaterial color={PAL.roofBlue} />
          </mesh>
        )),
      )}
    </group>
  );
}

type VBuildingSpec = {
  x: number;
  z: number;
  size: number;
  height: number;
  roofH: number;
  variant: "warm" | "stone";
};

const VICTORIAN_BUILDINGS: VBuildingSpec[] = [
  { x: -3.4, z: -0.5, size: 1.0, height: 1.5, roofH: 0.7, variant: "warm" },
  { x: -2.7, z: -2.1, size: 1.1, height: 1.9, roofH: 0.85, variant: "warm" },
  { x: -1.3, z: -2.6, size: 1.0, height: 1.4, roofH: 0.6, variant: "stone" },
  { x: -3.7, z: 1.2, size: 0.95, height: 1.2, roofH: 0.5, variant: "warm" },
  { x: 0.5, z: -2.8, size: 1.05, height: 1.7, roofH: 0.75, variant: "stone" },
  { x: 2.3, z: -2.4, size: 0.9, height: 1.3, roofH: 0.6, variant: "warm" },
  { x: 3.6, z: -1.0, size: 1.0, height: 1.5, roofH: 0.7, variant: "stone" },
  { x: -3.0, z: 2.4, size: 0.9, height: 1.1, roofH: 0.5, variant: "warm" },
];

function VictorianBuilding({ spec }: { spec: VBuildingSpec }) {
  const wallColor = spec.variant === "warm" ? PAL.wallWarm : PAL.wallStone;
  const winTex = useMemo(() => makeWindowTexture(wallColor), [wallColor]);
  return (
    <group position={[spec.x, 0, spec.z]}>
      <mesh position={[0, spec.height / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[spec.size, spec.height, spec.size]} />
        <meshStandardMaterial
          map={winTex}
          emissive="#ff9d40"
          emissiveMap={winTex}
          emissiveIntensity={0.45}
        />
      </mesh>
      {/* Pyramid roof */}
      <mesh
        position={[0, spec.height + spec.roofH / 2, 0]}
        rotation={[0, Math.PI / 4, 0]}
        castShadow
      >
        <coneGeometry args={[spec.size * 0.78, spec.roofH, 4]} />
        <meshStandardMaterial color={PAL.roofBlue} />
      </mesh>
      {/* Chimney */}
      <mesh position={[spec.size * 0.25, spec.height + spec.roofH * 0.6, spec.size * 0.2]} castShadow>
        <boxGeometry args={[0.12, 0.25, 0.12]} />
        <meshStandardMaterial color={PAL.wallDark} />
      </mesh>
    </group>
  );
}

function Bus({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Body */}
      <mesh position={[0, 0.34, 0]} castShadow>
        <boxGeometry args={[1.1, 0.68, 0.42]} />
        <meshStandardMaterial color={PAL.bus} />
      </mesh>
      {/* Window strips (both sides + front) — emissive */}
      {[0.211, -0.211].map((dz, i) => (
        <mesh key={i} position={[0, 0.5, dz]}>
          <boxGeometry args={[1.0, 0.16, 0.005]} />
          <meshStandardMaterial color="#ffe6a3" emissive="#ffd98a" emissiveIntensity={0.5} />
        </mesh>
      ))}
      <mesh position={[0, 0.32, 0.211]}>
        <boxGeometry args={[1.0, 0.14, 0.005]} />
        <meshStandardMaterial color="#ffe6a3" emissive="#ffd98a" emissiveIntensity={0.4} />
      </mesh>
      {/* Front windshield */}
      <mesh position={[0.551, 0.42, 0]}>
        <boxGeometry args={[0.005, 0.22, 0.36]} />
        <meshStandardMaterial color="#ffe6a3" emissive="#ffd98a" emissiveIntensity={0.5} />
      </mesh>
      {/* Roof line */}
      <mesh position={[0, 0.69, 0]}>
        <boxGeometry args={[1.12, 0.04, 0.44]} />
        <meshStandardMaterial color="#3a1010" />
      </mesh>
      {/* Wheels */}
      {[
        [-0.36, 0.21],
        [0.36, 0.21],
        [-0.36, -0.21],
        [0.36, -0.21],
      ].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.1, z]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.06, 16]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
      ))}
    </group>
  );
}

function LampPost({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.55, 0]} castShadow>
        <cylinderGeometry args={[0.035, 0.05, 1.1, 8]} />
        <meshStandardMaterial color={PAL.lamp} />
      </mesh>
      <mesh position={[0, 1.18, 0]}>
        <boxGeometry args={[0.16, 0.16, 0.16]} />
        <meshStandardMaterial color={PAL.lamp} />
      </mesh>
      <mesh position={[0, 1.18, 0]}>
        <sphereGeometry args={[0.075, 10, 10]} />
        <meshStandardMaterial color="#fff5c0" emissive="#ffe09a" emissiveIntensity={2.0} />
      </mesh>
      <pointLight position={[0, 1.18, 0]} intensity={0.35} distance={2.5} color="#ffd98a" />
    </group>
  );
}

function Cloud3D({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const mat = useMemo(
    () => (
      <meshStandardMaterial color="#f4f4f4" roughness={1} />
    ),
    [],
  );
  return (
    <group position={position} scale={scale}>
      <mesh>
        <sphereGeometry args={[0.55, 14, 14]} />
        {mat}
      </mesh>
      <mesh position={[0.5, 0.05, 0.1]}>
        <sphereGeometry args={[0.45, 14, 14]} />
        <meshStandardMaterial color="#f4f4f4" roughness={1} />
      </mesh>
      <mesh position={[-0.5, 0.0, -0.05]}>
        <sphereGeometry args={[0.42, 14, 14]} />
        <meshStandardMaterial color="#ededed" roughness={1} />
      </mesh>
      <mesh position={[0.1, 0.32, 0.1]}>
        <sphereGeometry args={[0.36, 14, 14]} />
        <meshStandardMaterial color="#f6f6f6" roughness={1} />
      </mesh>
      <mesh position={[0.85, 0.08, -0.1]}>
        <sphereGeometry args={[0.32, 14, 14]} />
        <meshStandardMaterial color="#ededed" roughness={1} />
      </mesh>
    </group>
  );
}

function CelestialBody({ kind }: { kind: "sun" | "moon" }) {
  const isSun = kind === "sun";
  return (
    <group position={isSun ? [4.5, 5.5, -5] : [-4.5, 5.5, -5]}>
      <mesh>
        <sphereGeometry args={[0.7, 24, 24]} />
        <meshStandardMaterial
          color={isSun ? "#ffe48a" : "#e8eef5"}
          emissive={isSun ? "#ffce5a" : "#dde6f0"}
          emissiveIntensity={isSun ? 1.2 : 0.8}
        />
      </mesh>
      {/* Halo */}
      <mesh>
        <sphereGeometry args={[0.95, 24, 24]} />
        <meshBasicMaterial
          color={isSun ? "#fff3c0" : "#f0f4fa"}
          transparent
          opacity={0.18}
        />
      </mesh>
    </group>
  );
}

function Precipitation({ kind }: { kind: "rain" | "snow" | "hail" }) {
  const ref = useRef<InstancedMesh>(null);
  const count = kind === "snow" ? 260 : kind === "hail" ? 130 : 220;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  type Drop = { x: number; y: number; z: number; speed: number; drift: number };

  const drops = useMemo<Drop[]>(
    () =>
      Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * 9,
        y: Math.random() * 8 + 1,
        z: (Math.random() - 0.5) * 9,
        speed:
          kind === "snow"
            ? 0.5 + Math.random() * 0.4
            : kind === "hail"
              ? 7 + Math.random() * 3
              : 5 + Math.random() * 3,
        drift: kind === "snow" ? (Math.random() - 0.5) * 0.6 : 0,
      })),
    [count, kind],
  );

  useFrame((_, delta) => {
    const mesh = ref.current;
    if (!mesh) return;
    for (let i = 0; i < drops.length; i++) {
      const d = drops[i];
      d.y -= d.speed * delta;
      if (kind === "snow") {
        d.x += Math.sin(d.y * 1.6) * delta * d.drift;
      }
      if (d.y < -0.1) {
        d.y = 7 + Math.random() * 1.5;
        d.x = (Math.random() - 0.5) * 9;
        d.z = (Math.random() - 0.5) * 9;
      }
      dummy.position.set(d.x, d.y, d.z);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[null!, null!, count]}>
      {kind === "rain" ? (
        <cylinderGeometry args={[0.012, 0.012, 0.28, 4]} />
      ) : (
        <sphereGeometry args={[kind === "hail" ? 0.05 : 0.06, 6, 6]} />
      )}
      <meshBasicMaterial
        color={kind === "rain" ? "#c4dcf2" : "#ffffff"}
        transparent
        opacity={kind === "snow" ? 0.95 : 0.7}
      />
    </instancedMesh>
  );
}

function Diorama({ weatherState }: { weatherState: string }) {
  const isDay = weatherState === "sun" || weatherState === "drought";
  const showRain = weatherState === "rain" || weatherState === "flood";
  const showSnow = weatherState === "snow";
  const showHail = weatherState === "hail";
  const showClouds = !isDay;
  const showFlood = weatherState === "flood";

  const groundColor = useMemo(() => {
    if (weatherState === "drought") return "#a88a5e";
    if (weatherState === "snow") return "#e6ecf2";
    return PAL.stone;
  }, [weatherState]);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={isDay ? 0.6 : 0.32} />
      <directionalLight
        position={[6, 10, 5]}
        intensity={isDay ? 1.2 : 0.45}
        castShadow
        color={isDay ? "#fff5d0" : "#b8c8e0"}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={30}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
      />
      <hemisphereLight args={[isDay ? 0xffe8b3 : 0x556a8a, 0x222230, 0.4]} />

      {/* Wooden tray base */}
      <mesh position={[0, -0.35, 0]} receiveShadow>
        <boxGeometry args={[10.4, 0.5, 10.4]} />
        <meshStandardMaterial color={PAL.woodTray} roughness={0.95} />
      </mesh>
      {/* Lighter wooden trim */}
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[9.6, 0.1, 9.6]} />
        <meshStandardMaterial color={PAL.woodEdge} roughness={0.9} />
      </mesh>
      {/* Stone street top */}
      <mesh position={[0, 0.005, 0]} receiveShadow>
        <boxGeometry args={[8.8, 0.06, 8.8]} />
        <meshStandardMaterial color={groundColor} roughness={0.85} />
      </mesh>

      {/* Flood water plane (rises above stone when flooded) */}
      {showFlood && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.32, 0]}>
          <planeGeometry args={[8.6, 8.6]} />
          <meshStandardMaterial
            color="#4a7aa3"
            transparent
            opacity={0.7}
            roughness={0.25}
            metalness={0.1}
          />
        </mesh>
      )}

      {/* Landmarks */}
      <ClockTower position={[-1.6, 0.04, 0.2]} />
      <Bridge position={[2.2, 0.04, 1.5]} />

      {/* Victorian buildings */}
      {VICTORIAN_BUILDINGS.map((spec, i) => (
        <VictorianBuilding key={i} spec={spec} />
      ))}

      {/* Bus */}
      <Bus position={[-0.3, 0.14, 1.8]} />

      {/* Lamp posts */}
      {[
        [-3.6, 0.04, 0.5],
        [-1.8, 0.04, 1.7],
        [0.6, 0.04, 2.6],
        [3.0, 0.04, -0.2],
        [-3.4, 0.04, -2.8],
        [3.4, 0.04, 2.5],
      ].map(([x, y, z], i) => (
        <LampPost key={i} position={[x, y, z]} />
      ))}

      {/* Sun / moon */}
      {isDay ? <CelestialBody kind="sun" /> : <CelestialBody kind="moon" />}

      {/* Clouds */}
      {showClouds && (
        <>
          <Cloud3D position={[-3.2, 5.0, -2.5]} scale={1.3} />
          <Cloud3D position={[2.0, 5.6, -3.2]} scale={1.0} />
          <Cloud3D position={[1.0, 5.1, 2.6]} scale={0.95} />
          <Cloud3D position={[-1.5, 5.8, 1.5]} scale={0.85} />
        </>
      )}

      {/* Precipitation */}
      {showRain && <Precipitation kind="rain" />}
      {showSnow && <Precipitation kind="snow" />}
      {showHail && <Precipitation kind="hail" />}

      <OrbitControls
        enablePan={false}
        enableZoom
        enableDamping
        dampingFactor={0.08}
        minDistance={6}
        maxDistance={18}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.05}
        target={[0, 1.2, 0]}
      />
    </>
  );
}

export function City3D({ weatherState }: City3DProps) {
  return (
    <div className="city-3d-canvas">
      <Canvas
        shadows
        camera={{ position: [9, 7.5, 9], fov: 38 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Diorama weatherState={weatherState} />
      </Canvas>
    </div>
  );
}
