import {DELETE_DONE, SET_IS_DONE, SET_IS_EDIT} from "./actionTypes";
import API from "../../api";

export const setTodo = (letter) => {
    return {
        type: 'SETTODO',
        payload: letter,
    }
}

export const setTodos = (data) => {
    return {
        type: 'SETTODOS',
        payload: data,
    }
}

export const setIsEdit = (data) => {
    return {
        type: SET_IS_EDIT,
        payload: data
    }
}

export const setIsDone = (data) => {
    return{
        type: SET_IS_DONE,
        payload: data,
    }
}

export const deleteDone = (data) => {
    return{
        type: DELETE_DONE,
        payload: data,
    }
}

export const fetchTodos = () => {
    return (dispatch) => {
        return API.getTodos()
            .then((result) => {
                dispatch(setTodos(result.data))
            })
    }
}

export const createTodo = (todo, todos) => {
    return (dispatch) => {
        return API.createTodo(todo)
            .then((res) => {
                dispatch(setTodos([...todos, res.data]))
            })
    }
}