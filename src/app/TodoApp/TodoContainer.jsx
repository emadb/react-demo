import { Component } from 'react';
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'
import TodoStats from './TodoStats'
import settings from 'settings'
import axios from 'axios'

class TodoContainer extends Component {

  constructor() {
    super()
    this.state = {
      waitingMessageIsVisibile: false,
      errorMessage: '',
      todolist: []
    }
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }

  componentWillMount() {
    axios
      .get(`${settings.host}/todos`)
      .then(res => this.setState({todolist: res.data.result}))
  }

  handleCheck(id) {
    this.setState({waitingMessageIsVisibile: true})
    const todo = this.state.todolist.find(t => t.id === id)

    const options = {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      data: !todo.done,
      url: `${settings.host}/todos/${id}/done`,
    }

    axios(options)
      .then(() => axios.get(`${settings.host}/todos`))
      .then(res => this.setState({todolist: res.data.result, waitingMessageIsVisibile: false}))
      .catch(err => {
        this.setState({errorMessage: err.response.data, waitingMessageIsVisibile: false })
      })
  }
  
  handleAddTodo(text) {
    this.setState({waitingMessageIsVisibile: true})
    
    const nextId = this.state.todolist.length
    const todo = {
      id: nextId,
      text: text,
      done: false
    }
    
    // Simulo un ritardo nella risposta
    setTimeout(() => {
      axios
        .post(`${settings.host}/todos/${nextId}`, todo)
        .then(() => axios.get(`${settings.host}/todos`))
        .then(res => this.setState({todolist: res.data.result, waitingMessageIsVisibile: false}))
        .catch(err => {
          this.setState({errorMessage: err.response.data, waitingMessageIsVisibile: false })
        })
    }, 2000)  
  }

  render() {

    const doneCount = this.state.todolist.filter(t => t.done).length
    const notDoneCount = this.state.todolist.filter(t => !t.done).length

    return (
      <div className="row">
        <div className="col-12">
          <TodoAdd onAddTodo={this.handleAddTodo}/>
        </div>
        <div className="col-12">
          <WaitingMessage isVisible={this.state.waitingMessageIsVisibile}/>
          <ErrorMessage msg={this.state.errorMessage} />
        </div>
        <div className="col-8">
          <TodoList todos={this.state.todolist} onChecked={this.handleCheck}/>
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






export default TodoContainer;
