import { OrbitControls, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React from "react"
import styled from "styled-components"
import Plane from "./Plane"

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

const ProductDesign = () => {
    return (
        <>
            <Canvas>
                <Stage environment={"city"} intensity={0.6}>
                    <Plane/>
                </Stage>
                    <OrbitControls enableZoom={false} />
            </Canvas>
            <Desc>
                We design innovative products that solve problems and exceed expectations.
            </Desc>
        </>
    )
}

export default ProductDesign