import styled from "styled-components"

const InputContainer = styled.div `
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`

const Label = styled.label`
    font-weight: bold;
    text-transform: capitalize;
`
const Input = styled.input`
    padding: 5px;
    font-size: 1.2rem;
`

interface Props {
    type: string,
    placeholder?: string
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void ;
}

export default function FormInput (props:Props) {
    return(
        <InputContainer>
            <Label htmlFor={props.type}>{props.type}</Label>
            <Input type={props.type} id={props.type} onChange={props.handleInput} placeholder={props.placeholder}/>
        </InputContainer>
    )

}