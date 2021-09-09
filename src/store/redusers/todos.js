const todos = (state = [], action) => {
    switch(action.type){
        case 'SETTODOS':
            return state = action.payload
        default:
            return state
    }
}
export default todos;