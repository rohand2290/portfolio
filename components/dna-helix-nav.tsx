"use client"

import { useRef, useMemo, useCallback } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import * as THREE from "three"

interface Section {
  id: string
  label: string
  color: string
}

const SECTIONS: Section[] = [
  { id: "hero", label: "Home", color: "#38bdf8" },
  { id: "projects", label: "Projects", color: "#3b82f6" },
  { id: "experience", label: "Experience", color: "#ef4444" },
  { id: "publications", label: "Blog", color: "#22c55e" },
  { id: "photography", label: "Photography", color: "#eab308" },
  { id: "contact", label: "Contact", color: "#38bdf8" },
]

function DNAStrand({
  activeSection,
  onSectionClick,
  scrollProgress,
}: {
  activeSection: string
  onSectionClick: (id: string) => void
  scrollProgress: number
}) {
  const groupRef = useRef<THREE.Group>(null)
  const particlesRef = useRef<THREE.Points>(null)

  const { strand1Points, strand2Points } = useMemo(() => {
    const s1: THREE.Vector3[] = []
    const s2: THREE.Vector3[] = []
    const totalPoints = 200
    const height = 12
    const radius = 0.6

    for (let i = 0; i < totalPoints; i++) {
      const t = i / totalPoints
      const y = t * height - height / 2
      const angle = t * Math.PI * 6
      s1.push(
        new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius)
      )
      s2.push(
        new THREE.Vector3(
          Math.cos(angle + Math.PI) * radius,
          y,
          Math.sin(angle + Math.PI) * radius
        )
      )
    }
    return { strand1Points: s1, strand2Points: s2 }
  }, [])

  const strand1Geom = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(strand1Points)
    return new THREE.TubeGeometry(curve, 200, 0.04, 8, false)
  }, [strand1Points])

  const strand2Geom = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(strand2Points)
    return new THREE.TubeGeometry(curve, 200, 0.04, 8, false)
  }, [strand2Points])

  const basePairPositions = useMemo(() => {
    const pairs: { y: number; idx: number }[] = []
    const totalPairs = 30
    const height = 12
    for (let i = 0; i < totalPairs; i++) {
      const t = i / totalPairs
      pairs.push({ y: t * height - height / 2, idx: i })
    }
    return pairs
  }, [])

  const sectionPairs = useMemo(() => {
    return SECTIONS.map((section, i) => {
      const t = (i + 0.5) / SECTIONS.length
      const height = 12
      const y = t * height - height / 2
      const angle = t * Math.PI * 6
      const radius = 0.6
      return {
        ...section,
        y,
        angle,
        p1: new THREE.Vector3(
          Math.cos(angle) * radius,
          y,
          Math.sin(angle) * radius
        ),
        p2: new THREE.Vector3(
          Math.cos(angle + Math.PI) * radius,
          y,
          Math.sin(angle + Math.PI) * radius
        ),
      }
    })
  }, [])

  const particlePositions = useMemo(() => {
    const count = 60
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const t = Math.random()
      const angle = t * Math.PI * 6
      const radius = 0.6 + (Math.random() - 0.5) * 0.3
      const height = 12
      positions[i * 3] = Math.cos(angle) * radius
      positions[i * 3 + 1] = t * height - height / 2
      positions[i * 3 + 2] = Math.sin(angle) * radius
    }
    return positions
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        state.clock.elapsedTime * 0.15 + scrollProgress * Math.PI * 2
    }
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position
        .array as Float32Array
      for (let i = 0; i < positions.length / 3; i++) {
        positions[i * 3 + 1] += 0.005
        if (positions[i * 3 + 1] > 6) {
          positions[i * 3 + 1] = -6
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <group ref={groupRef}>
      {/* Strand 1 */}
      <mesh geometry={strand1Geom}>
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Strand 2 */}
      <mesh geometry={strand2Geom}>
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Regular base pairs (decorative) */}
      {basePairPositions.map(({ y, idx }) => {
        const t = (y + 6) / 12
        const angle = t * Math.PI * 6
        const radius = 0.6
        const isSectionPair = sectionPairs.some(
          (sp) => Math.abs(sp.y - y) < 0.3
        )
        if (isSectionPair) return null
        return (
          <group key={`bp-${idx}`}>
            <mesh
              position={[0, y, 0]}
              rotation={[0, angle, 0]}
            >
              <cylinderGeometry args={[0.012, 0.012, radius * 2, 6]} />
              <meshStandardMaterial
                color="#1e40af"
                emissive="#1e40af"
                emissiveIntensity={0.2}
                transparent
                opacity={0.3}
              />
            </mesh>
          </group>
        )
      })}

      {/* Section base pairs (interactive) */}
      {sectionPairs.map((sp) => {
        const isActive = activeSection === sp.id
        return (
          <group key={sp.id}>
            <mesh
              position={[0, sp.y, 0]}
              rotation={[0, sp.angle, 0]}
              onClick={() => onSectionClick(sp.id)}
              onPointerOver={(e) => {
                e.stopPropagation()
                document.body.style.cursor = "pointer"
              }}
              onPointerOut={() => {
                document.body.style.cursor = "default"
              }}
            >
              <cylinderGeometry
                args={[
                  isActive ? 0.04 : 0.025,
                  isActive ? 0.04 : 0.025,
                  0.6 * 2,
                  8,
                ]}
              />
              <meshStandardMaterial
                color={sp.color}
                emissive={sp.color}
                emissiveIntensity={isActive ? 1.5 : 0.4}
                transparent
                opacity={isActive ? 1 : 0.6}
              />
            </mesh>

            {/* Label */}
            <Html
              position={[1.2, sp.y, 0]}
              center
              style={{
                pointerEvents: "none",
                whiteSpace: "nowrap",
              }}
            >
              <div
                className={`text-xs font-sans transition-all duration-300 select-none ${
                  isActive
                    ? "opacity-100 text-foreground"
                    : "opacity-0"
                }`}
                style={{
                  textShadow: isActive
                    ? `0 0 10px ${sp.color}`
                    : "none",
                  color: isActive ? sp.color : undefined,
                }}
              >
                {sp.label}
              </div>
            </Html>

            {/* DNA letters */}
            <Html
              position={[
                Math.cos(sp.angle) * 0.3,
                sp.y + 0.15,
                Math.sin(sp.angle) * 0.3,
              ]}
              center
              style={{ pointerEvents: "none" }}
            >
              <div
                className="text-[8px] font-mono select-none"
                style={{
                  color: sp.color,
                  opacity: isActive ? 0.8 : 0.3,
                }}
              >
                {["A-T", "G-C", "T-A", "C-G", "A-T", "G-C"][
                  SECTIONS.indexOf(sp)
                ]}
              </div>
            </Html>
          </group>
        )
      })}

      {/* Floating particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#38bdf8"
          size={0.03}
          transparent
          opacity={0.4}
          sizeAttenuation
        />
      </points>
    </group>
  )
}

export default function DNAHelixNav({
  activeSection,
  scrollProgress,
  onSectionClick,
}: {
  activeSection: string
  scrollProgress: number
  onSectionClick: (id: string) => void
}) {
  const handleClick = useCallback(
    (id: string) => {
      onSectionClick(id)
    },
    [onSectionClick]
  )

  return (
    <div className="fixed left-0 top-0 z-50 hidden h-screen w-[15%] min-w-[140px] lg:block">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#38bdf8" />
        <pointLight position={[-5, -5, 5]} intensity={0.3} color="#06b6d4" />
        <DNAStrand
          activeSection={activeSection}
          onSectionClick={handleClick}
          scrollProgress={scrollProgress}
        />
      </Canvas>

      {/* Gradient overlay at edges */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
