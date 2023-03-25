/* eslint-disable no-underscore-dangle */
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

// Add redux extension to global window
declare let window: IWindow;

const initialStore: any = {};

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f: any) => f;

export const store: any = createStore(
    rootReducer,
    initialStore,
    compose(
        applyMiddleware(thunk),
        devTools
    )
);

interface IWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
}
