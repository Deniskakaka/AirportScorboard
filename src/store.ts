import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import mainReducer from "./Redux/reduser";

const reducer = combineReducers({
    fly: mainReducer
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;