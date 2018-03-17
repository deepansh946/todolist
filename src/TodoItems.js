import React, { Component } from "react";

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTodo = this.createTodo.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTodo(todo) {
    return (
      <li onClick={() => this.delete(todo.key)} key={todo.key}>
        {todo.text}
      </li>
    );
  }

  render() {
    var todoEntries = this.props.items;
    var list = todoEntries.map(this.createTodo);

    return (
      <ul className="theList">
        <span>{list}</span>
      </ul>
    );
  }
}

export default TodoItems;
