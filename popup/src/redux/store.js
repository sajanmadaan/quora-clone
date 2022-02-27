import {createStore, combineReducers} from "redux";
import {reducer} from "./ques_redux/reducer";
import {ans_reducer} from "./ans_redux/reducer"
const rootreducer = combineReducers({
    ans: ans_reducer
})
export const store = createStore(rootreducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

console.log(store.getState());