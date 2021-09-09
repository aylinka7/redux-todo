import {combineReducers} from "redux";
import todo from './todo'
import todos from './todos'
import todoEdit from './todoEdit'
import isDone from './isDone'

const allReducers = combineReducers({
    todo,
    todos,
    todoEdit,
    isDone,
})
 export default allReducers;