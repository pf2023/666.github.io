import React, { Component } from "react";
import AddTodo from "./contianners/AddTodo";
import VisibleTodoList from "./contianners/VisibleTodoList";
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        );
    }
}

export default App;
