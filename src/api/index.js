import axios from "axios";

const API =axios.create({
    baseURL: "https://60f10b3d38ecdf0017b0f9ca.mockapi.io/todo"
})

export default {
    getTodos:() => API.get(""),
    createTodo: (todo) => API.post("", {
        body: JSON.stringify(todo)
    })
}