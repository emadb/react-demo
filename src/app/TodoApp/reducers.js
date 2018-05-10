
function todosLoaded(state, action) {
  if (action.type === 'TODOS_LOADED') {
    return Object.assign(state, {todolist: action.content})
  } 

  if (action.type === 'SHOW_WAITING_MESSAGE') {
    return Object.assign(state, {waitingMessageIsVisibile: true})
  }

  if (action.type === 'HIDE_WAITING_MESSAGE') {
    return Object.assign(state, {waitingMessageIsVisibile: false})
  }

  if (action.type === 'ERROR') {
    return Object.assign(state, {errorMessage: action.content})
  }

  return state
}

export default todosLoaded