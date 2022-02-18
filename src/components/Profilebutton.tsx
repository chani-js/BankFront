import styled from "styled-components"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { selectUser } from "../../services/Selectors"
import { useSelector } from "react-redux"

const Button = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    color:#2c3e50;
    margin-right: 40px;
`

const Name = styled.p`
    font-weight: 600;
    margin-left: 6px;
`

const Icon = styled(FontAwesomeIcon)`
    font-size: 1.2rem;
`

export default function ProfileButton() {
    const name = useSelector(selectUser).user.firstName

    return (
        <Button to="/user">
            <Icon icon={faUserCircle} />
            <Name>{name ? (name) : ("Profile")}</Name>
        </Button>
    )
}