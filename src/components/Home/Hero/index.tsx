import styled from "styled-components"
import { bankTree } from "../../../img"
import HeroContent from "./HeroContent"

const HeroContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  background: center no-repeat url(${bankTree}) ;
  background-size: cover;
  padding: clamp(50px, 8vh, 150px);
`

export default function Hero() {
    return (
        <HeroContainer>
            <HeroContent />
        </HeroContainer>
    )
}