import { rootReducer } from './reducers';
import { applyMiddleware, compose, legacy_createStore as createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: any = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
);
