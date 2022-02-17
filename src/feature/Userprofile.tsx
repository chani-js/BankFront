import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { selectUser } from '../services/Selectors'
import { AppDispatch, RootState } from '../stores/Store'

type Error = {
    status: number,
    message: string
}

interface State {
    status: string,
    user: {
        firstName: string,
        lastName: string,
        id: string,
        email: string,
        updatedAt: string
    },
    error: Error,
    edit: {
        on: boolean,
        newUser: {
            newFirstName: string,
            newLastName: string
        }
    }
}

interface ApiResponse {
    body: {
        createdAt: string,
        email: string,
        firstName: string,
        id: string,
        lastName: string,
        updatedAt: string
    },
    message: string,
    status: number
}

const initialState: State = {
    status: "void",
    user: {
        firstName: "",
        lastName: "",
        id: "",
        email: "",
        updatedAt: ""
    },
    error: {
        status: 0,
        message: ''
    },
    edit: {
        on: false,
        newUser: {
            newFirstName: "",
            newLastName: ""
        }
    }
}

const { actions, reducer } = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetching: (draft) => {
            if (draft.status === 'void') {
                draft.status = 'pending'
                return
            }
            if (draft.status === 'rejected') {
                draft.error = initialState.error
                draft.status = 'pending'
                return
            }
            if (draft.status === 'loggedIn') {
                draft.status = 'updating'
                return
            }
        },
        resolved: (draft, action: PayloadAction<any>) => {
            console.log("draft==>", draft, "action==>", action)
            if (draft.status === "pending") {
                const state = draft.user
                const data = action.payload.body
                state.firstName = data.firstName
                state.lastName = data.lastName
                state.email = data.email
                state.id = data.id
                state.updatedAt = data.updatedAt
                draft.status = "resolved"
                return
            }
        },
        rejected: {
            prepare: (error) => ({
                payload: error
            }),
            reducer: (draft, action: PayloadAction<Error>) => {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.status = 'rejected'
                    draft.error = action.payload
                    return
                }
                return
            }
        },
        toggleEdit: (draft, action) => {
            draft.edit.on = action.payload
            console.log(draft.edit.on);

            return
        },
        setNewUser: (draft, action) => {
            if (action.payload.propertyToUpdate === 'first') {
                draft.edit.newUser.newFirstName = action.payload.entry
                return
            }
            if (action.payload.propertyToUpdate === 'last') {
                draft.edit.newUser.newLastName = action.payload.entry
                return
            }
            return
        },
        updateUser: (draft, action: PayloadAction<any>) => {
            const state = draft.user
            const data = action.payload.body
            state.firstName = data.firstName
            state.lastName = data.lastName
            state.email = data.email
            state.id = data.id
            state.updatedAt = data.updatedAt
            draft.status = "resolved"
            return
        },
    }
})

export function fetchUserProfile(token: string) {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        const status = selectUser(getState()).status
        if (status === 'pending' || status === "updating") {
            return
        }
        const requestOptions = {
            method: 'POST',
            headers: {
                accept: "application/json",
                'Content-Type': 'application/json',
                authorization: 'Bearer' + token
            },

        }
        dispatch(actions.fetching())
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
            const data: ApiResponse = await response.json()
            if (data.status === 200) {
                dispatch(actions.resolved(data))
            } else {
                dispatch(actions.rejected(data))
            }
        } catch (err: any) {
            dispatch(actions.rejected(err))
        }
    }
}

export function editUserProfile(token: string) {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        const user = selectUser(getState()).edit.newUser
        const requestOptions = {
            method: 'PUT',
            headers: {
                accept: "application/json",
                'Content-Type': 'application/json',
                authorization: 'Bearer' + token
            },
            body: JSON.stringify({
                "firstName": user.newFirstName,
                "lastName": user.newLastName
            })
        }
        dispatch(actions.fetching())
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
            const data: any = await response.json()
            dispatch(actions.updateUser(data))
            dispatch(actions.toggleEdit(false))
        } catch (err: any) {
            dispatch(actions.rejected(err))
        }
    }
}

export const { toggleEdit, setNewUser } = actions
export default reducer