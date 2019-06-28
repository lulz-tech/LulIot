import AsyncStorage from '@react-native-community/async-storage';

import { AnyAction, combineReducers } from 'redux';
import { PersistConfig, persistReducer } from 'redux-persist';

import { IStoreModel, AppReducer } from './interfaces/Store';

const REDUX_PERSIST_CONFIG: PersistConfig = {
    key: 'primary',
    storage: AsyncStorage,
};

const combinedReducers = combineReducers<IStoreModel>({
    foo: (state = {}) => (state),
});

const persistedReducers = persistReducer<AppReducer, AnyAction>(REDUX_PERSIST_CONFIG, combinedReducers as any);

const initialState = persistedReducers(({} as any), ({} as any));

export const rootReducer = (state: any, action: AnyAction) => {
    return persistedReducers(state, action);
};
