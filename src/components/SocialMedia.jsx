import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React from "react"
import styled from "styled-components"
import Iphone from "./Iphone"

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

const SocialMedia = () => {
    return (
        <>
            <Canvas>
                <Stage environment={"city"} intensity={0.6}>
                    <Iphone/>
                </Stage>
                    <OrbitControls enableZoom={false} />
            </Canvas>
            <Desc>
                We help build your online presence with engaging content, audience interaction, and follower growth.
            </Desc>
        </>
    )
}

export default SocialMedia