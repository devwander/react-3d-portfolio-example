import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React from "react"
import styled from "styled-components"
import Spider from "./Spider"

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

const Illustration = () => {
    return (
        <>
            <Canvas>
                <Stage environment={"city"} intensity={0.6}>
                    <Spider />
                </Stage>
                    <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
            <Desc>
                We bring your ideas to life with captivating designs that convey your brand message.
            </Desc>
        </>
    )
}

export default Illustration