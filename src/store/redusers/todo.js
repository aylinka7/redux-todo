const todo = (state = "", action) => {
    switch(action.type){
        case 'SETTODO':
            return state = action.payload
        default:
            return state
    }
}
export default todo;