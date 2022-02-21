import Subtitle from "./Subtitle";
import Text from "./Text";
import styled from "styled-components";

const ContentBox = styled.div`
    top: 2rem;
    right: 2rem;
    width: fit-content;
    background: white;
    padding: 2rem;
    text-align: left;
    margin: 0 auto;
    @media (min-width: 920px) {
        top: 50px;
        right: 50px;
        margin: 2rem;
        padding: 3rem;
    }
`

export default function HeroContent () {
    return(
        <ContentBox>
            <h2 className="sr-only">Promoted Content</h2>
            <Subtitle text="No fees." />
            <Subtitle text="No minimum deposit." />
            <Subtitle text="High interest rates." />
            <Text text="Open a savings account with Argent Bank today!"/>
        </ContentBox>
    )
}