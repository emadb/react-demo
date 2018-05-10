import { Component } from 'react';
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'
import TodoStats from './TodoStats'
import actions from './actions'
import reducers from './reducers'
import withState from '../WithState'

class TodoContainer extends Component {

  constructor() {
    super()
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }

  componentWillMount() {
    actions.getTodos()
  }

  handleCheck(id) {
    actions.showWaitingMessage()
    const todo = this.props.todolist.find(t => t.id === id)
    actions.toggle(todo)
  }
  
  handleAddTodo(text) {
    actions.showWaitingMessage()
    const nextId = this.props.todolist.length
    actions.addTodo(nextId, text)
  }

  render() {

    const doneCount = this.props.todolist.filter(t => t.done).length
    const notDoneCount = this.props.todolist.filter(t => !t.done).length

    return (
      <div className="row">
        <div className="col-12">
          <TodoAdd onAddTodo={this.handleAddTodo}/>
        </div>
        <div className="col-12">
          <WaitingMessage isVisible={this.props.waitingMessageIsVisibile}/>
          <ErrorMessage msg={this.props.errorMessage} />
        </div>
        <div className="col-8">
          <TodoList todos={this.props.todolist} onChecked={this.handleCheck}/>
        </div>
        <div className="col-4">
          <TodoStats done={doneCount} notDone={notDoneCount} />
        </div>
      </div>
    );
  }
}

function ErrorMessage({msg}) {
  
  if (msg !== ''){
    return <div className="alert alert-danger" >{msg.error}</div>
  }
  return <div></div>
}

function WaitingMessage({isVisible}) {
  if (isVisible){
    return <div>Attendere prego...</div>
  }
  return <div></div>
}

const initialState = {
  waitingMessageIsVisibile: false,
  errorMessage: '',
  todolist: []
}

export default withState(TodoContainer, reducers, initialState)
