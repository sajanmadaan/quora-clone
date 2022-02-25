import { RECENT} from "./actionTypes";

const init = {
    ques: ""
}

export const reducer = (store = init, action) => {
    
    switch(action.type){

        case RECENT:
            return {...store, ques: action.payload}
        
        default:
            return store;    
    }
}