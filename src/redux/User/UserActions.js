import { UserActionTypes } from "./UserActionTypes";

export const googleSignInStart = () => {
    return {
        type: UserActionTypes.GOOGLE_SIGN_IN_START
    }
}

export const signInFailure = (error) => {
    return {
        type: UserActionTypes.SIGN_IN_FAILURE,
        payload: error
    }
}

export const signInSuccess = (user) => {
    return {
        type: UserActionTypes.SIGN_IN_SUCCESS,
        payload: user
    }
}

export const emailSignInStart = (emailAndPassword) => {
    return {
        type: UserActionTypes.EMAIL_SIGN_IN_START,
        payload: emailAndPassword
    }
}

