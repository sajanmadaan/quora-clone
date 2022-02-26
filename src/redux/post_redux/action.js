import { RECENT , LIKE_POST , UNLIKE_POST} from "./actionTypes";

export const recent_ques = (data) =>({
    type: RECENT,
    payload: data
});


export const likePost = (payload,index) => ({
    type: LIKE_POST,
    payload,
    index,
  });
export const unlikePost = (payload) => ({
    type: UNLIKE_POST,
    payload,
  });

  