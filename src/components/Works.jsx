import React, { useState } from "react"
import styled from "styled-components"
import Development from "./Development"
import Illustration from "./Illustration"
import ProductDesign from "./ProductDesign"
import SocialMedia from "./SocialMedia"
import WebDesign from "./WebDesign"

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media"
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`

const Container = styled.div`
  width: 75vw;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`

const ListItem = styled.li`
  font-size: 58px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 0.5px white;
  position: relative;

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: rebeccapurple;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`

const Right = styled.div`
  flex: 1;
`

const Works = () => {
  const [work, setWork] = useState("Web Design")

  return (
      <Section>
        <Container>
          <Left>
            <List>
              {data.map((item, i) => (
                <ListItem key={i} text={item} onClick={() => setWork(item)}>{item}</ListItem>
              ))}
            </List>
          </Left>
          <Right>
            { work === "Web Design" ? (<WebDesign />) :
              work === "Development" ? (<Development />) :
              work === "Illustration" ? (<Illustration />) :
              work === "Product Design" ? (<ProductDesign />) :
              (<SocialMedia />)
            }
          </Right>
        </Container>
      </Section>
  )
}

export default Works