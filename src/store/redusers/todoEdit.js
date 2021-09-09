import {SET_IS_EDIT} from "../actions/actionTypes";

const initialState = {
    input: "",
    id: null,
}

const todoEdit = (state = initialState, action) => {
    switch(action.type){
        case SET_IS_EDIT:
            return {...state, id: action.payload.id, input: action.payload.task}
        default:
            return {...state}
    }
}
export default todoEdit;