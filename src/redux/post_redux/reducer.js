import { RECENT , LIKE_POST , UNLIKE_POST } from "./actionTypes";

import {local_get} from "../../utils/localstorage";

const init = {
    count:1,
    post: local_get("My_posts") || []
}


export const Postreducer = (store = init, action) => {
    
    switch(action.type){

        case RECENT:
            return {...store, post: action.payload};
        
        case LIKE_POST:
            return { ...store, count: store.count + action.payload };
        
        case UNLIKE_POST:
            return { ...store, count: store.count - action.payload };

        default :
            return store;
    }
}