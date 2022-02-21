import Icon from "./Icon"
import styled from "styled-components"

type Feature = {
    title: string,
    subtitle: string,
    img: string,
    alt: string
}

interface Props {
    feature: Feature;
}

const ItemDiv = styled.div`
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

const ItemTitle = styled.h2`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 1rem 0 0.5rem 0;
`

export default function FeatureItem(props: Props) {
    const feature = props.feature

    return (
        <ItemDiv>
            <Icon img={feature.img} alt={feature.alt} />
            <ItemTitle>{feature.title}</ItemTitle>
            <p>{feature.subtitle}</p>
        </ItemDiv>
    )
}