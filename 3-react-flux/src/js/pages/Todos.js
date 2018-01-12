import React from "react";

import Todo from "../components/Todo"
export default class Todos extends React.Component {

    constructor(){
        super();
        this.state = {
            todos : [
                {
                    id: 11345,
                    text: "Exercise for 1 hour",
                    complete: false
                },
                {
                    id: 23456,
                    text: "Buy some wine",
                    complete: false
                }
            ]
        };
    }
    render() {
        const { todos } =this.state;
        const TodoComponents = todos.map( todo => {
            return <Todo key={todo.id} {...todo} />
        })
        return (
          <div>
            <h1>Todos</h1>
            <ul>{TodoComponents}</ul>
          </div>
        );
  }
}