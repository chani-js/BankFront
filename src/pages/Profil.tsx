import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserProfile } from '../feature/Userprofile'
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

export default function Profil() {
    const dispatch = useDispatch()
    const token = useSelector(selectLogin).token
    useEffect(() => {
        dispatch(fetchUserProfile(token))
    }, [dispatch, token])

    return (
        <Main>
            <ProfileHeader />
            {accounts.map((account, index) =>
                <AccountBlock key={index} account={account} />
            )}
        </Main>
    )
}