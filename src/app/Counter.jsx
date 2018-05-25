import { Component } from 'react';

// dispatcher.js
const subscribers = []
const dispatcher = {
  dispatch(action) {
    subscribers.forEach(s => s(action))
  },
  register(fn){
    subscribers.push(fn)
  }
  // unregister
}

// withState.jsx
function withState(Cmp, initialState, reducers) {

  return class WithState extends Component {
    constructor(){
      super()
      this.state = { innerState: initialState }
      // this.state = initialState
    }

    componentWillMount() {
      dispatcher.register(action => {


        const nextState = reducers.reduce((s, fn) => {
          return Object.assign({}, s, fn(s, action))
        }, this.state.innerState )
        this.setState({innerState: nextState})
      })      
    }

    render() {
      return <Cmp {...this.state.innerState} dispatch={dispatcher.dispatch} />
    }
  }

}
// reducers.js
// fn (s, a) => s

function increment(state, action) {
  if (action.type === 'INCREMENT'){
    const nextValue = state.counter + 1
    return {counter: nextValue, resetEnabled: nextValue !== 0}
    
  }
  return state
}

function decrement(state, action) {
  if (action.type === 'DECREMENT'){
    const nextValue = state.counter - 1
    if (nextValue !== 0) {
      return {counter: nextValue, resetEnabled: true}
    } 
    return {counter: nextValue, resetEnabled: false}
    
  }
  return state
}

function reset(state, action){
  if(action.type === 'RESET') {
    return {counter: 0, resetEnabled: false}
  }
  return state
}


class Counter extends Component {

  constructor(){
    super()
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
  }

  increment() {
    this.props.dispatch({type: 'INCREMENT', content: {}})
  }

  decrement() {
    this.props.dispatch({type: 'DECREMENT', content: {}})
  }

  reset() {
    this.props.dispatch({type: 'RESET', content: {}})
  }

  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <Buttons inc={this.increment} dec={this.decrement} />
        <div>
          <button onClick={this.reset} disabled={!this.props.resetEnabled}>Reset</button>
        </div>
      </div>
    );
  }
}

function Buttons({inc, dec}){
  return <div>
          <button onClick={dec}>-</button>
          <button onClick={inc}>+</button>
        </div>
}

export default withState(Counter, {counter: 0, resetEnabled: false, alertMessage: ''}, [increment, decrement, reset])