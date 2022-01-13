import { put, call, takeLatest, all } from 'redux-saga/effects';

function* loadCharsSaga(action) {
    alert('aaaaa');
}

export default function* rootSaga() {
    yield all([
        takeLatest('LOAD_CHARACTERS_SAGA', loadCharsSaga)
    ])
}