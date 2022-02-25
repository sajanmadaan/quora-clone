import { RECENT_QUES } from "./actionTypes";

const init = {
    ques: ""
}

export const reducer = (store = init, action) => {
    
    switch(action.type){

        case RECENT_QUES:
            return {...store, ques: action.payload}
        
        default:
            return store;    
    }
}