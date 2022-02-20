import styled from "styled-components"
import { MouseEventHandler } from "react"

const Button = styled.button`
    background: white;
    border: 2px solid #0b3379 ;
    color: #0b3379;
    padding: 8px 20px;
    margin: 0px 8px;
    width: 100px;
    font-weight: bold;
    font-family: Avenir, Helvetica, Arial, sans-serif;
`

interface Props {
    type: string,
    text: string,
    click?: () => void,
}

export default function EditButton (props: Props) {
    return (
        <Button id={props.type} onClick={props.click}>{props.text}</Button>
    )
}