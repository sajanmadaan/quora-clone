import { RECENT_QUES } from "./actionTypes";
import {local_get} from "../../utils/localstorage";

const init = {
    ques: local_get("recent_ques") || ""
}

export const reducer = (store = init, action) => {
    
    switch(action.type){

        case RECENT_QUES:
            return {...store, ques: action.payload}
        
        default:
            return store;    
    }
}