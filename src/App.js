import TodoItem from "./components/TodoItem/TodoItem";
import {Input, Button} from "./Styles"
import {useSelector, useDispatch} from "react-redux";
import {createTodo, fetchTodos, setTodo} from "./store/actions";
import {setTodos} from "./store/actions";
import {useEffect} from "react";

function App() {
    const todo = useSelector(state => state.todo)
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])
    const submit = (e) => {
        e.preventDefault()
        dispatch(createTodo(todo, todos))
        dispatch(setTodo(""))
    }
    const del = (id) => {
        fetch(`https://60f10b3d38ecdf0017b0f9ca.mockapi.io/todo/${id}`, {
            method: "DELETE",
        })
        dispatch(setTodos(todos.filter(item => item.id !== id)))
    }

    const done = (id, data) => {
        fetch(`https://60f10b3d38ecdf0017b0f9ca.mockapi.io/todo/${id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        })
    }

    const edit = (id, data) => {
        fetch(`https://60f10b3d38ecdf0017b0f9ca.mockapi.io/todo/${id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((res) => {
                todos.map(item => item.id === id ? item = res : item)
            })
    }

    return (
        <div className="App">
            <form onSubmit={submit}>
                <Input value={todo} onChange={(e) => dispatch(setTodo(e.target.value))} type="text" placeholder="input TODO"/>
                <Button type="submit">Save</Button>
            </form>
            <section>
                {
                    todos.map((item) => <TodoItem edit={edit} done={done} del={del} key={item.id} item={item} id={item.id} task={item.task} status={item.status}/>)
                }
            </section>
        </div>
    );
}

export default App;
