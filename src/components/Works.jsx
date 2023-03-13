import React from "react"
import styled from "styled-components"

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
    return (
        <Section>
          <Container>
            <Left>
              <List>
                {data.map((item, i) => (
                  <ListItem key={i} text={item}>{item}</ListItem>
                ))}
              </List>
            </Left>
            <Right>{/* 3d model */}</Right>
          </Container>
        </Section>
    )
}

export default Works