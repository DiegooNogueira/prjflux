import {createStore, compose, applyMiddleware} from 'redux';
import reducers from './modules/rootReducer';
import sagas from './modules/rootSaga';
import createSage from 'redux-saga';


const sagaMiddleware = createSage();

const store = createStore(
    reducers,
    compose(
        applyMiddleware(sagaMiddleware)
    ));

sagaMiddleware.run(sagas);
export default store;