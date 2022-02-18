import styled from "styled-components"


interface Props {
    text: string,
    active?: boolean,
}

const Btn = styled.button.attrs((props:Props) => ({
    active: props.active
}))`
  padding: 10px 8px;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  background-color: ${props => props.active ? "#00bc77" : "#acacac"};
  color: #fff;
  width: clamp(100px, 100%, 200px);
  height: fit-content;
`

interface Props {
    click?: () => void,
}

export default function Button (props:Props) {
    return(
        <Btn onClick={props.click} active={props.active}>{props.text}</Btn>
    )
}