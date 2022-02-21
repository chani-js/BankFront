import styled from "styled-components"

const Text = styled.h2`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  @media (min-width: 920px) {
      font-size: 1.5rem;
  }
`

interface Props {
    text: string
}

export default function Subtitle(props:Props) {
    return(
        <Text>{props.text}</Text>
    )
}