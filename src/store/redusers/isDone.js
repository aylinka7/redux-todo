import {DELETE_DONE, SET_IS_DONE} from "../actions/actionTypes";

const isDone = (state = [], action) => {
    switch (action.type){
        case SET_IS_DONE:
            return state = [...state, action.payload]
        case DELETE_DONE:
            return state = action.payload
        default:
            return state
    }
}
export default isDone;




//
// const isDone = (state = false, action) => {
//     switch (action.type){
//         case SET_IS_DONE:
//             return state = !state
//         default:
//             return state
//     }
// }
// export default isDone;