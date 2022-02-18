import { logo } from "../../assets/img"
import styled from 'styled-components'
import { Link } from "react-router-dom"

const LogoDiv = styled(Link)`
    height: clamp(40px, 7vh, 60px);
`

const LogoImg = styled.img`
    height: 100%;
    width: auto;
`

export default function Logo() {
    return (
        <LogoDiv to="/">
            <LogoImg src={logo} alt="logo" />
            <h1 className="sr-only">Argent Bank</h1>
        </LogoDiv>
    )
}