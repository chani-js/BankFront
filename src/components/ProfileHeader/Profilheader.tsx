import { useDispatch, useSelector } from "react-redux"
import { selectUser, selectLogin } from "../../services/Selectors"
import styled from "styled-components"
import Button from "../Button"
import * as userActions from "../../feature/Userprofile"
import ProfileInput from "./Profileinput"
import EditButton from "./Editbutton"

const Header = styled.header`
    color: white;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin: 3vh 0;
    font-size: 1.5rem;
`

const DummyDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`

const NameDisplay = styled.div`
    display: flex;
    margin-bottom: 8px;
`

const FirstName = styled.h2`
    margin-right: 0.8rem;
`

const LastName = styled(FirstName)`
    margin-right: 0;
`

const Buttons = styled.div`
    display:flex;
`

export default function ProfileHeader() {
    const user = useSelector(selectUser).user
    const firstName = user.firstName
    const lastName = user.lastName
    const edit = useSelector(selectUser).edit.on
    const dispatch = useDispatch()
    const token = useSelector(selectLogin).token

    const activateEdit = () => {
        dispatch(userActions.toggleEdit(true))
    }

    const userChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const propertyToUpdate = e.currentTarget.id
        const entry = e.currentTarget.value
        const currentUserInfo = {
            propertyToUpdate,
            entry
        }
        dispatch(userActions.setNewUser(currentUserInfo))
    }

    const editProfile = () => {
        dispatch(userActions.editUserProfile(token))
    }

    const cancelEdit = () => {
        dispatch(userActions.toggleEdit(false))
    }

    return (
        <Header>
            <h2>Welcome back</h2>
            {!edit ? (
                <DummyDiv>
                    <NameDisplay>
                        <FirstName>{firstName}</FirstName>
                        <LastName>{lastName} !</LastName>
                    </NameDisplay>
                    {!edit && (<Button active text="Edit Name" click={activateEdit} />)}
                </DummyDiv>
            ) : (
                <DummyDiv>
                    <NameDisplay>
                        <ProfileInput type="first" handleInput={userChange} placeholder={user.firstName} />
                        <ProfileInput type="last" handleInput={userChange} placeholder={user.lastName} />
                    </NameDisplay>
                    <Buttons>
                        <EditButton type="cancel" text="Cancel" click={cancelEdit} />
                        <EditButton type="save" text="Save" click={editProfile} />
                    </Buttons>
                </DummyDiv>
            )}
        </Header>
    )
}