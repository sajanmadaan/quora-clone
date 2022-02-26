import { RECENT , LIKE_POST , UNLIKE_POST } from "./actionTypes";


const init = {
    count:1,

    ques: ""
}

export const Postreducer = (store = init, action) => {
    
    switch(action.type){

        case RECENT:
            return {...store, ques: action.payload};
        
        case LIKE_POST:
            return { ...store, count: store.count + action.payload };
        
        case UNLIKE_POST:
            return { ...store, count: store.count - action.payload };

        default :
            return store;
    }
}