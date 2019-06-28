import { applyMiddleware, createStore, Store } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import axiosMiddleware from './middlewares/axios';

import { rootReducer } from './rootReducer';

import { IApplicationStore } from './interfaces/Store';

// @ts-ignore
const isDebuggingInChrome = __DEV__ && !!(window as any).navigator.userAgent;

export function configureApplicationStore(onComplete?: () => void): Store<IApplicationStore> {
    const middlewares: any[] = [reduxThunk, axiosMiddleware];

    if (isDebuggingInChrome) {
        middlewares.push(logger);
    }

    const store = createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    );

    persistStore(store, undefined, onComplete);

    if (isDebuggingInChrome) {
        // @ts-ignore
        (window as any).store = store;
    }

    return store;
}
