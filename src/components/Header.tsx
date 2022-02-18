import SignIn from "./Signin"
import Logo from "./Logo"
import styled from "styled-components"
import LoggedInNav from "./Header"
import { useSelector, useDispatch } from "react-redux"
import { selectLogin } from "../services/Selectors"
import { fetchUserProfile } from "../feature/Userprofile"
import { useEffect } from "react"
import * as loginActions from '../feature/Login'

const HeaderContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: clamp(5px, 1vh, 10px) clamp(20px, 4vh, 50px);
`

export default function Header() {
    const dispatch = useDispatch()
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            dispatch(loginActions.localStorageLogin(token))
            dispatch(fetchUserProfile(token))
        }
    }, [dispatch])

    const isLoggedIn = useSelector(selectLogin).status === 'loggedIn'

    return (
        <HeaderContainer>
            <Logo />
            {isLoggedIn ? (<LoggedInNav />) : (<SignIn />)}

        </HeaderContainer>
    )
}