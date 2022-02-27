import { RECENT_ANSWERS} from "./actionTypes";

export const recent_answers = (data, index) =>({
    type: RECENT_ANSWERS,
    payload: data,
    index: index
});