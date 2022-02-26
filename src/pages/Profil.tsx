import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchUserProfile } from "../feature/Userprofile"
import { selectLogin } from "../services/Selectors"
import styled from "styled-components"
import ProfileHeader from "../components/ProfileHeader/Profilheader"
import AccountBlock from "../components/Account"
import accounts from "../mock/accounts"

const Main = styled.main`
    background: #12002b;
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    `

export default function Profil({ auth }: any) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector(selectLogin).token
    useEffect(() => {
        if (token.length === 0) {
            navigate("/sign-in")
        } else (fetchUserProfile(token))
    }, [dispatch, token, navigate])
    return (
        <Main>
            <ProfileHeader />
            {accounts.map((account, index) =>
                <AccountBlock key={index} account={account} />
            )}
        </Main>
    )
}