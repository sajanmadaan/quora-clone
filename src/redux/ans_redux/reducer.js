import { RECENT_ANSWERS } from "./actionTypes";
import { local_get } from "../../utils/localstorage";
const init = {
    answers: local_get("answers") || [null, null, null]
}

export const ans_reducer = (store = init, action) => {
    
    switch(action.type){

        case RECENT_ANSWERS:
            store.answers[action.index] = action.payload;
            console.log(store.answers)
            return {answers:[...store.answers]};
        
        default:
            return store;    
    }
}