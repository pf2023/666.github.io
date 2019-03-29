import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo } from "../actions";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case "SHOW_ALL":
            return todos;
        case "SHOW_ACTIVE":
            return todos.filter(item => !item.completed);
        case "SHOW_COMPLETED":
            return todos.filter(item => item.completed);
        default:
            throw new Error("no such filter");
    }
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
