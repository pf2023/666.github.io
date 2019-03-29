const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.text,
                    id: action.id,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(item => (item.id === action.id) ? {
                ...item,
                completed: !item.completed
            } : item)
        default:
            return state
    }
}

export default todos