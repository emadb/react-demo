import reducers from '../src/app/TodoApp/reducers'
import {assert} from 'chai'

describe('TodoReducers', () => {
  
  test('TODOS_LOADED Should set the state', () => {
    const action = {type: 'TODOS_LOADED', content: [{id:1, text: ''}, {id: 2, text:''}]}
    const newState = reducers[0]({todolist: []}, action)
    assert.equal(newState.todolist.length, 2)
  })

})