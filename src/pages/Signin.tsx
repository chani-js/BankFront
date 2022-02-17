import styled from "styled-components"
import SignInContainer from "../components/SignInContainer/Signincontainer"

const Main = styled.main`
    flex: 1 1 auto;
    background-color: #12002b;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function SignIn() {
    return (
        <Main>
            <SignInContainer />
        </Main>
    )
}