import React, { Component } from "react";
import Todos from "./todos";
import Addform from "./Addform";
import "react-notifications/lib/notifications.css";

import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

class App extends Component {
  state = {
    todos: [
    ]
  };
  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };
  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };
  render() {
    return (
      <div className="todo-App container">
        <NotificationContainer />
        <h1 className="center ">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <Addform addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
