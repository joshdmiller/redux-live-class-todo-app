import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';

import reducers from './reducers';

const logger = createLogger({
  collapsed: true,
});

const initialState = { todos: [] };
const middleware = applyMiddleware(
  logger
);

const store = createStore( reducers, initialState, middleware );

if ( module.hot ) {
  module.hot.accept( './reducers', () => {
    const nextRootReducer = require( './reducers' ).default;
    store.replaceReducer( nextRootReducer );
  })
}

export default store;

