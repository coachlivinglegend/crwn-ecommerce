import {createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './RootSaga'

import rootReducer from './RootReducer';
const sagaMiddleware = createSagaMiddleware();
const middleWares = [logger, sagaMiddleware ];

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);
export default { store, persistor }