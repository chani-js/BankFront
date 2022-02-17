import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { selectLogin } from "../services/Selectors";
import { AppDispatch, RootState } from "../store/Store"

type User = {
    email: string,
    password: string
}

type ApiResponse = {
    token: string
}

type Error = {
    status: number,
    message: string
}

export interface LoginState {
    status: string,
    user: User,
    token: string,
    error: Error,
    remember: boolean
}

const initialState: LoginState = {
    status: 'void',
    user: {
        email: '',
        password: ''
    },
    token: '',
    error: {
        status: 0,
        message: ''
    },
    remember: false
}

export function tryLogin() {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        const status = selectLogin(getState()).status
        if (status === 'pending' || status === 'updating') {
            return
        }
        const user: User = selectLogin(getState()).user
        const requestOptions = {
            method: 'POST',
            headers: {
                accept: "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }
        dispatch(actions.fetching())
        try {

            const response = await fetch('http://localhost:3001/api/v1/user/login', requestOptions)
            const data = await response.json()
            console.log("data===>", data, "datastatus==>", data.status)
            if (data.status === 200) {
                console.log(" 1==>")
                dispatch(actions.resolved(data))
                console.log(" 2==>")

            } else {
                dispatch(actions.rejected(data))
            }
        } catch (err: any) {
            dispatch(actions.rejected(err))
        }
    }

}

const { actions, reducer } = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUser: (draft, action) => {
            if (action.payload.propertyToUpdate === 'username') {
                draft.user.email = action.payload.entry
                return
            }
            if (action.payload.propertyToUpdate === 'password') {
                draft.user.password = action.payload.entry
                return
            }
            return
        },
        remember: {
            prepare: (remember: any) => ({
                payload: remember
            }),
            reducer: (draft, action: any) => {
                draft.remember = action.payload
                return
            }
        },
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
        resolved: {
            prepare: (data: any) => ({
                payload: {
                    token: data.body.token
                }
            }),
            reducer: (draft, action: PayloadAction<ApiResponse>) => {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.token = action.payload.token
                    draft.user = initialState.user
                    draft.status = 'loggedIn'
                    return
                }
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
                    draft.token = ""
                    return
                }
                return
            }
        },
        logOut: (draft) => {
            draft.status = 'void'
            draft.token = ''
            return
        },
        localStorageLogin: {
            prepare: (token: any) => ({
                payload: token
            }),
            reducer: (draft, action: any) => {
                draft.status = 'loggedIn'
                draft.token = action.payload
                return
            }
        }
    }
})


export const { setUser, logOut, localStorageLogin, remember } = actions
export default reducer
