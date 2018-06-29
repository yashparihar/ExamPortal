import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import loginReducer from './reducer/loginReducer';
import questionReducer from './reducer/questionReducer';


export default createStore(combineReducers({
        login: loginReducer,
        questions: questionReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger, promise(), thunk)
);