import { RootState } from "../redux/Store"

export const selectLogin = (state: RootState) => state.login
export const selectUser = (state: RootState) => state.user

