import { all, call } from 'redux-saga/effects';
import { shopSagas } from './Shop/ShopSaga'
import { userSagas } from './User/UserSaga'
import { cartSagas } from './Cart/CartSaga'


export default function* rootSaga() {
    yield all([
        // fetchCollectionsStart();
        // call(fetchCollectionsStart),
        call(shopSagas),
        call(userSagas),
        call(cartSagas)
    ])
}