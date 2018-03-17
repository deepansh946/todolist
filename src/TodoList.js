import React, { Component } from "react";
import logo from "./logo.svg";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  addTodo(e) {
    e.preventDefault();

    if (this.state.text === "") {
      alert("no empty text");
    }

    const todo = {
      text: this.state.text,
      key: Date.now()
    };

    this.setState(prevState => {
      return {
        todos: prevState.todos.concat(todo),
        text: ""
      };
    });
  }

  deleteTodo(key) {
    const newTodo = this.state.todos.filter(item => item.key !== key);

    this.setState({
      todos: newTodo
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Todo App</h2>
        </div>
        <div className="header">
          <form onSubmit={this.addTodo}>
            <input
              value={this.state.text}
              onChange={this.onChange}
              placeholder="Enter the task"
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems items={this.state.todos} delete={this.deleteTodo} />
      </div>
    );
  }
}

export default TodoList;
