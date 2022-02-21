import FeatureItem from "./Featureitem"
import { iconChat, iconMoney, iconSecurity } from "../../../img"
import styled from "styled-components"

const featuresArray = [
    {
        title: 'You are our #1 priority',
        subtitle: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
        img: iconChat,
        alt: "chat"
    },
    {
        title: 'More savings means higher rates',
        subtitle: 'The more you save with us, the higher your interest rate will be!',
        img: iconMoney,
        alt: "money"
    },
    {
        title: 'Security you can trust',
        subtitle: 'We use top of the line encryption to make sure your data and money is always safe.',
        img: iconSecurity,
        alt: "security"
    }
]

const FeatureDiv = styled.section`
    display: flex;
    flex-direction: column;
    padding: 5vh 0;
    @media (min-width: 920px) {
        flex-direction: row;
    }
`


export default function Features() {
    return (
        <FeatureDiv>
            {featuresArray.map((feature, index) =>
                <FeatureItem feature={feature} key={index} />
            )}
        </FeatureDiv>
    )
}