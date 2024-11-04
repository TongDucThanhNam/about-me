"use client"

import {Canvas, useLoader} from "@react-three/fiber";
import {Suspense} from "react";
import {Environment, OrbitControls, Stage} from "@react-three/drei";
import {GLTFLoader} from "three-stdlib";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "./scene.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.5}/>
        </>
    );
};

export default function Home() {
    return (
        <div className="justify-center h-screen w-screen">
            <Canvas shadows dpr={[1, 2]} camera={{fov: 50}}>
                <Suspense fallback={null}>
                    <Stage preset="portrait" intensity={0.8} environment="forest">
                        <Model/>
                    </Stage>
                    <OrbitControls
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                        autoRotate={true}
                        autoRotateSpeed={2.0}
                        maxPolarAngle={Math.PI}
                        minPolarAngle={0}
                        maxAzimuthAngle={Infinity}
                        minAzimuthAngle={-Infinity}
                        enableDamping={true}
                        dampingFactor={0.1}
                        rotateSpeed={1.0}
                        zoomSpeed={1.2}
                        panSpeed={0.3}
                    />
                    <Environment preset="forest" background />
                </Suspense>
            </Canvas>
        </div>
    );
}