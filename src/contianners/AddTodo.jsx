import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";

const AddTodo = ({ dispatch }) => {
    let input;
    let submit = e => {
        e.preventDefault();
        if (!input.value.trim()) {
            return;
        }
        dispatch(addTodo(input.value));
        input.value = "";
    };
    return (
        <div>
            <form onSubmit={submit}>
                <input ref={e => (input = e)} />
                <button type="submit">addTodo</button>
            </form>
        </div>
    );
};

export default connect()(AddTodo);
