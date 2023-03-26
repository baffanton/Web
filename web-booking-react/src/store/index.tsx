import { rootReducer } from './reducers';
import { legacy_createStore as createStore } from '@reduxjs/toolkit';

export const store: any = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
