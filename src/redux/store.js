import {createStore} from "redux";
import {reducer} from "./ques_redux/reducer";
import {Postreducer} from "./post_redux/reducer";

import { combineReducers } from 'redux';

const rootreducer =  combineReducers({reducer, Postreducer})

export const store = createStore(rootreducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

console.log(store.getState());