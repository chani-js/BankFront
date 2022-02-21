import styled from "styled-components"

const IconDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: clamp(130px, 10vh, 200px);
    height: clamp(130px, 10vh, 200px);
    border-radius: 100px;
    border: 10px solid #00bc77;
`

const IconImg = styled.img`
    width: 80%;
    height: auto;
`

interface Props {
    img: string,
    alt: string
}

export default function Icon (props: Props) {
    return(
        <IconDiv>
             <IconImg src={props.img} alt={props.alt} />
        </IconDiv>
       
    )
}