import styled from "styled-components"

const Input = styled.input`
    padding: 5px;
    font-size: 1.2rem;
    margin: 20px 8px 5px;
`

interface Props {
    type: string,
    placeholder: string
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void ;
}

export default function ProfileInput (props:Props) {
    return(
            <Input type={props.type} id={props.type} onChange={props.handleInput} placeholder={props.placeholder}/>
    )

}