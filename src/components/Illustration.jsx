import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import Spider from "./Spider";
import Mac from "./Mac";

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

  @media only screen and (max-width: 768px) {
    top: -75px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Illustration = () => {
  return (
    <>
      <Canvas>
        <Stage environment={"city"} intensity={0.6}>
          <Mac />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Desc>
        We bring your ideas to life with captivating designs that convey your
        brand message.
      </Desc>
    </>
  );
};

export default Illustration;
