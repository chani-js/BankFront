import styled from "styled-components"

const SmallText = styled.p`
    font-size: 0.9rem;
    width: clamp(200px, 25vw, 300px);
    margin-top: 1rem;
    @media (min-width: 920px) {
        font-size: 1.2rem;
    }
`

interface Props {
    text: string
}

export default function Text (props:Props) {
    return(
        <SmallText>{props.text}</SmallText>
    )
}