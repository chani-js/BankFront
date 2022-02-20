import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FormEvent, useEffect } from "react"
import styled from "styled-components"
import Button from "../Button"
import FormCheckbox from "./Checkbox"
import FormInput from "./Forminput"
import FormError from "./Formerror"
import { useDispatch, useSelector } from "react-redux"
import { selectLogin } from "../../services/Selectors"
import * as loginActions from '../../feature/Login'
import { Navigate } from 'react-router-dom'

const Container = styled.section`
    background: white;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    padding: 30px;
`

const Icon = styled(FontAwesomeIcon)`
    margin: 20px 0 0 0 ;
    font-size: 2rem;
`

const Title = styled.h1`
    margin: 10px 0 30px 0;
`

const Form = styled.form`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
`

export default function SignInContainer() {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(selectLogin).status === 'loggedIn'
    const token = useSelector(selectLogin).token
    const remember = useSelector(selectLogin).remember

    useEffect(() => {
        if (token.length > 1 && remember) {
            localStorage.setItem('token', token)
        }
    }, [token, remember])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const propertyToUpdate = e.currentTarget.id
        const entry = e.currentTarget.value
        const currentUserInfo = {
            propertyToUpdate,
            entry
        }
        dispatch(loginActions.setUser(currentUserInfo))
    }

    const loginUser = (e: FormEvent) => {
        e.preventDefault()
        dispatch(loginActions.tryLogin())
    }

    const errorMessage = useSelector(selectLogin).error?.message

    return isLoggedIn ? (<Navigate to="/user" replace={false} />) : (
        <Container>
            <Icon icon={faUserCircle} />
            <Title>Sign In</Title>
            <Form onSubmit={loginUser}>
                <FormInput type="username" handleInput={handleChange} />
                <FormInput type="password" handleInput={handleChange} />
                {errorMessage && <FormError errorMessage={errorMessage} />}
                <FormCheckbox type="remember-me" text="Remember me" />
                <Button active text="Sign In" />
            </Form>
        </Container>
    )
}