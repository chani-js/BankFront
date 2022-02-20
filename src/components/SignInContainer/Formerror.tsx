import styled from "styled-components"

const Error = styled.p`
    color: #ad1f1f;
    width: 100%;
    text-align: left;
    font-weight: 600;
    margin-bottom: 10px;
`

export default function FormError({errorMessage = ""}) {
    return(
               <Error>{errorMessage}</Error>     
    )
}