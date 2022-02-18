import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import * as LoginActions from "../../features/Login"
import { useNavigate } from "react-router";

const Button = styled.div`
    display: flex;
    align-items: center;
    color: #2c3e50;
`

const Icon = styled(FontAwesomeIcon)`
    font-size: 1.2rem ;
    margin-right: 6px;
`

const Text = styled.p`
    font-weight: 600;
`

export default function LogOut() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logUserOut = () => {
        dispatch(LoginActions.logOut())
        localStorage.removeItem('token')
        navigate('/', { replace: false })
    }

    return (
        <Button onClick={logUserOut}>
            <Icon icon={faSignOutAlt} />
            <Text>Sign Out</Text>
        </Button>
    )
}