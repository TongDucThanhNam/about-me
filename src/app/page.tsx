// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client"
import * as THREE from 'three'
import {useEffect, useRef, useState} from 'react'
import {Canvas, extend, useFrame, useThree} from '@react-three/fiber'
import {Environment, Lightformer, useGLTF, useTexture} from '@react-three/drei'
import {BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint} from '@react-three/rapier'
import {MeshLineGeometry, MeshLineMaterial} from 'meshline'
import {MacbookScroll} from "@/components/ui/macbook-scroll";
import {Button} from "@nextui-org/button";
import {AppleCardsCarouselDemo} from "@/components/MyHobby";
import {ThreeDCardDemo} from "@/components/ThreeCard";
import {CompareDemo} from "@/components/Compare";
import {HeroHighlightDemo} from "@/components/Highlight";
import {TimelineDemo} from "@/components/TimeLind";

extend({MeshLineGeometry, MeshLineMaterial})
useGLTF.preload('/done.glb')
useTexture.preload('/band.png')

export default function App() {
    // const {debug} = useControls({debug: false})
    return (
        <div className={"max-w-screen overflow-x-hidden"}>
            <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full ">
                <MacbookScroll
                    title={
                        <span>
                            Hãy tìm hiểu thêm về tớ nhé
                            <br/>
                            Love you
                        </span>
                    }

                    src={`/img.png`}
                    showGradient={false}
                />
            </div>

            {/**/}
            <div className="h-screen bg-gray-900 flex flex-col md:flex-row">
                {/* Hero Section */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-start md:ml-20 space-y-6">
                    <h1 className="text-4xl md:text-5xl text-white font-bold leading-tight">
                        Giới thiệu bản thân:
                    </h1>
                    <p className="text-xl text-gray-300">
                        Bản thiết kế vĩ đại, tinh hoa hội đụ, phụ nữ gấc yêu
                    </p>
                    <div className="mt-12">
                        <h2 className="text-2xl text-white font-semibold mb-4">Điểm mạnh</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Co tu</li>
                            <li>Giàu tình cảm</li>
                            <li>Có laptop</li>
                        </ul>
                    </div>
                    <div className="space-x-4">
                        <Button color={"primary"} variant={"shadow"}>
                            Hốt liền
                        </Button>

                        <Button color={"danger"} variant={"shadow"}>
                            Không hốt
                        </Button>
                    </div>

                </div>

                {/* 3D Canvas Section */}
                <div className="w-full md:w-1/2 h-[60vh] md:h-auto">
                    <Canvas camera={{position: [0, 0, 13], fov: 25}}>
                        <ambientLight intensity={Math.PI}/>
                        <Physics debug={false} interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
                            <Band/>
                        </Physics>
                        <Environment background blur={0.75}>
                            {/*<color attach="background" args={["black"]}/>*/}
                            <Lightformer intensity={2} color="white" position={[0, -1, 5]}
                                         rotation={[0, 0, Math.PI / 3]}
                                         scale={[100, 0.1, 1]}/>
                            <Lightformer intensity={3} color="white" position={[-1, -1, 1]}
                                         rotation={[0, 0, Math.PI / 3]}
                                         scale={[100, 0.1, 1]}/>
                            <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]}
                                         scale={[100, 0.1, 1]}/>
                            <Lightformer intensity={10} color="white" position={[-10, 0, 14]}
                                         rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]}/>
                        </Environment>
                    </Canvas>
                </div>
            </div>

            {/*    */}
            <AppleCardsCarouselDemo/>



            {/**/}
            <CompareDemo/>

            {/*    */}
            <HeroHighlightDemo/>

            {/*    */}
            <TimelineDemo/>

            {/*    */}
            <ThreeDCardDemo/>
        </div>
    )
}

function Band({maxSpeed = 50, minSpeed = 10}) {
    const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef() // prettier-ignore
    const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3() // prettier-ignore
    const segmentProps = {type: 'dynamic', canSleep: true, colliders: false, angularDamping: 2, linearDamping: 2}
    const {
        nodes,
        materials
    } = useGLTF('/done.glb')
    const texture = useTexture('/brand.png')
    const {width, height} = useThree((state) => state.size)
    const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]))
    const [dragged, drag] = useState(false)
    const [hovered, hover] = useState(false)

    useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
    useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
    useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
    useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]) // prettier-ignore

    useEffect(() => {
        if (hovered) {
            document.body.style.cursor = dragged ? 'grabbing' : 'grab'
            return () => void (document.body.style.cursor = 'auto')
        }
    }, [hovered, dragged])

    useFrame((state, delta) => {
        if (dragged) {
            vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
            dir.copy(vec).sub(state.camera.position).normalize()
            vec.add(dir.multiplyScalar(state.camera.position.length()))
            ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
            card.current?.setNextKinematicTranslation({
                x: vec.x - dragged.x,
                y: vec.y - dragged.y,
                z: vec.z - dragged.z
            })
        }
        if (fixed.current) {
            // Fix most of the jitter when over pulling the window
            ;[j1, j2].forEach((ref) => {
                if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation())
                const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())))
                ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)))
            })
            // Calculate catmul curve
            curve.points[0].copy(j3.current.translation())
            curve.points[1].copy(j2.current.lerped)
            curve.points[2].copy(j1.current.lerped)
            curve.points[3].copy(fixed.current.translation())
            band.current.geometry.setPoints(curve.getPoints(32))
            // Tilt it back towards the screen
            ang.copy(card.current.angvel())
            rot.copy(card.current.rotation())
            card.current.setAngvel({x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z})
        }
    })

    curve.curveType = 'chordal'
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping

    return (
        <>
            <group position={[0, 4, 0]}>
                <RigidBody ref={fixed} {...segmentProps} type="fixed"/>
                <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
                    <BallCollider args={[0.1]}/>
                </RigidBody>
                <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
                    <BallCollider args={[0.1]}/>
                </RigidBody>
                <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
                    <BallCollider args={[0.1]}/>
                </RigidBody>
                <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps}
                           type={dragged ? 'kinematicPosition' : 'dynamic'}>
                    <CuboidCollider args={[0.8, 1.125, 0.01]}/>
                    <group
                        scale={2.25}
                        position={[0, -1.2, -0.05]}
                        onPointerOver={() => hover(true)}
                        onPointerOut={() => hover(false)}
                        onPointerUp={(e) => (e.target.releasePointerCapture(e.pointerId), drag(false))}
                        onPointerDown={(e) => (e.target.setPointerCapture(e.pointerId), drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation()))))}>
                        <mesh geometry={nodes.card.geometry}>
                            <meshPhysicalMaterial map={materials.base.map} map-anisotropy={16} clearcoat={1}
                                                  clearcoatRoughness={0.15} roughness={0.3} metalness={0.5}/>
                        </mesh>
                        <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3}/>
                        <mesh geometry={nodes.clamp.geometry} material={materials.metal}/>
                    </group>
                </RigidBody>
            </group>
            <mesh ref={band}>
                <meshLineGeometry/>
                <meshLineMaterial color="white" depthTest={false} resolution={[width, height]} useMap map={texture}
                                  repeat={[-3, 1]} lineWidth={1}/>
            </mesh>
        </>
    )
}