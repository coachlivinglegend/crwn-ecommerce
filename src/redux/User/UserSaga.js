import { takeLatest, put, all, call } from 'redux-saga/effects'
import { UserActionTypes } from './UserActionTypes'
import { signInSuccess, signInFailure } from './UserActions'
import { auth, googleProvider, createUserProfileDocument } from '../../Firebase/firebase.utils'
 
export function* getSanpshotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth)
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id : userSnapshot.id, ...userSnapshot.data()}))
    } catch (error) {
        yield put(signInFailure(error))
    }

}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSanpshotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}


export function* signInWithEmail ({payload: {email, password}}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        yield getSanpshotFromUserAuth(user)        
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* userSagas() {
    yield all (
        [
            call(onGoogleSignInStart), 
            call(onEmailSignInStart)
        ]
    );
}

