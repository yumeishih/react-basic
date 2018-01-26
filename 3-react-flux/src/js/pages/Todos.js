import React from "react";

import Todo from "../components/Todo"
import * as TodoAction from "../action/TodoAction"
import TodoStore from "../stores/TodoStore";

export default class Todos extends React.Component {
  constructor(){
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos : TodoStore.getAll()
    };
  }
  componentWillMount() {
    TodoStore.on("change",this.getTodos)
    console.log(`count: ${TodoStore.listenerCount("change")}`)
  }
  componentWillUnmount() {
    TodoStore.removeListener("change",this.getTodos);
  }
  getTodos(){
    this.setState({
      todos: TodoStore.getAll(),
    })
  }
  createTodo(){
    TodoAction.createTodo(Date.now())
  }
  reloadTodos(){
    TodoAction.reloadTodos(Date.now())
  }
  render() {
    const { todos } =this.state;
    const TodoComponents = todos.map( todo => {
        return <Todo key={todo.id} {...todo} />
    })
    return (
      <div>
        <button onClick={this.createTodo.bind(this)}>Create!</button>
        <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}