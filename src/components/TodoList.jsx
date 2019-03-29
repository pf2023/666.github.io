import React from "react";
// import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => {
    return (
        <ul>
            {todos.map(item => (
                <li
                    key={item.id}
                    style={{
                        textDecoration: item.completed ? "line-through" : "none"
                    }}
                    onClick={() => toggleTodo(item.id)}
                >
                    {item.text}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
