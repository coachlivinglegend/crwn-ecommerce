import { takeLatest, call, put, all } from 'redux-saga/effects';
import ShopActionTypes from './ShopActionTypes';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './ShopActions'
import { firestore, convertCollectionsSnapshotToMap } from '../../Firebase/firebase.utils'


export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}
//     //promise style
//     collectionRef.get().then(snapshot => {
//     //subscriber observer live method.
//     // collectionRef.onSnapshot(async snapshot => {
//     const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
//     dispatch(fetchCollectionsSuccess(collectionsMap))
//     }).catch(error => dispatch(fetchCollectionsFailure(error.message)))

// }

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionAsync
    )
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}