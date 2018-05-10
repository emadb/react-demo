import axios from 'axios'
import settings from 'settings'
import dispatcher from '../dispatcher'

const actions = {
  getTodos: function(){
    return axios
      .get(`${settings.host}/todos`)
      .then(res => {
        dispatcher.dispatch({type: 'TODOS_LOADED', content: res.data.result})
      })
  },

  showWaitingMessage() {
    dispatcher.dispatch({type: 'SHOW_WAITING_MESSAGE', content: {} })
  },

  addTodo(id, text) {
    const todo = {
      id: id,
      text: text,
      done: false
    }
    // Simulo un ritardo nella risposta
    setTimeout(() => {
      axios
        .post(`${settings.host}/todos/${id}`, todo)
        .then(() => this.getTodos()) 
        .then(() => dispatcher.dispatch({type: 'HIDE_WAITING_MESSAGE', content: {} }))       
        .catch(err => dispatcher.dispatch({type: 'ERROR', content: err.response.data}))
    }, 2000)  
  },
  toggle(todo){
    const options = {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      data: !todo.done,
      url: `${settings.host}/todos/${todo.id}/done`,
    }

    axios(options)
      .then(() => this.getTodos())
      .then(() => dispatcher.dispatch({type: 'HIDE_WAITING_MESSAGE', content: {} }))
      .catch(err => dispatcher.dispatch({type: 'ERROR', content: err.response.data}))
  }
}

export default actions