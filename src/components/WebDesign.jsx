import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React from "react"
import styled from "styled-components"
import Skybox from "./Skybox"

const Desc = styled.div`
    width: 200px;
    height: 70px;
    padding: 5px 20px 20px 20px;
    background-color: white;
    border-radius: 10px;
    top: 100px;
    right: 100px;
    position: absolute;
    text-align: justify;
`

const WebDesign = () => {
    return (
        <>
            <Canvas>
                <Stage environment={"city"} intensity={0.6}>
                    <Skybox/>
                </Stage>
                    <OrbitControls enableZoom={false} />
            </Canvas>
            <Desc>
            We create stunning and user-friendly websites tailored to your business needs.
            </Desc>
        </>
    )
}

export default WebDesign