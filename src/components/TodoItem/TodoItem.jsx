import React from 'react';
import {TodoItemWrapper} from "./TodoStyles";
import {useDispatch, useSelector} from "react-redux";
import {deleteDone, setIsDone, setIsEdit} from "../../store/actions";

function TodoItem(props) {
    const isEdit = useSelector(state => state.todoEdit)
    const isDone = useSelector(state => state.isDone)
    const dispatch = useDispatch()
    const del = e => {
        e.preventDefault()
        props.del(props.id)
    }
    const edit = () => {
        dispatch(setIsEdit({id: props.id, task: props.task}))
    }
    const save = e => {
        e.preventDefault()
        props.edit(props.id, isEdit.task)
        dispatch(setIsEdit({id: null, task: ""}))
    }
    const done = e => {
        e.preventDefault()
        dispatch(setIsDone(props.id))
        props.done(props.id, false)
    }
    const undone = e => {
        e.preventDefault()
        dispatch(deleteDone(isDone.filter(item => item !== props.id)))
        props.done(props.id, false)
    }
    return (
        <TodoItemWrapper>
            {
                isEdit.id !== props.id ? <div className={isDone.includes(props.id) ? "lined" : "re"}>{props.task}</div> :
                <input autoFocus type="text" value={isEdit.task} onChange={(e) => dispatch(setIsEdit({id: props.id, task: e.target.value}))}/>
            }
            <div className="btnWrapper">
                {isDone.includes(props.id) ? <button onClick={undone}>Undone</button> : <button onClick={done}>Done</button>}
                {isEdit.id !== props.id ? <button onClick={edit}>Edit</button> : <button onClick={save}>Save</button>}
                <button onClick={del}>Del</button>
            </div>
        </TodoItemWrapper>
    );
}

export default TodoItem;
