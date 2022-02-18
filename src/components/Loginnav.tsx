import ProfileButton from "./Profilebutton"
import LogOut from "./Logout"
import styled from "styled-components"

const Nav = styled.nav`
    display: flex;
    align-items: center;
`

export default function LoggedInNav() {
    return (
        <Nav>
            <ProfileButton />
            <LogOut />
        </Nav>
    )
}