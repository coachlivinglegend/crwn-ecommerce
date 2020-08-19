import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './Shop/ShopSaga'
import { userSagas } from './User/UserSaga'

export default function* rootSaga() {
    yield all([
        // fetchCollectionsStart();
        call(fetchCollectionsStart),
        call(userSagas)
    ])
}