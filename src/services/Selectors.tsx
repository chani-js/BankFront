import { RootState } from "../stores/Store"

export const selectLogin = (state: RootState) => state.login
export const selectUser = (state: RootState) => state.user

