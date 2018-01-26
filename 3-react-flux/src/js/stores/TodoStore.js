import { EventEmitter } from 'events';
import dispatcher from '../dispatcher'
class TodoStore extends EventEmitter {
  constructor(){
    super()
    this.todos = [
        {
            id: 11345,
            text: "Exercise for 1 hour",
            complete: false
        },
        {
            id: 23456,
            text: "Buy a lot wine",
            complete: false
        }
    ];
  }

  getAll() {
    return this.todos;
  }

  createTodo(text) {
    const id = Date.now()
    this.todos.push({
      id,
      text,
      complete:false
    })
    this.emit("change");
  }

  handleActions(action){
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
      }
      case "RECEIVE_TODOS": {
        this.todos = action.todos;
        this.emit("change")
      }
    }
  }
}

const todoStore = new TodoStore
dispatcher.register(todoStore.handleActions.bind(todoStore))
window.dispatcher = dispatcher
export default todoStore;