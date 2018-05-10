import { Component } from 'react';
import dispatcher from './dispatcher'

function withState(MyComponent, reducer, initialState){
  return class WithState extends Component {

    constructor(){
      super()
      this.state = {
        componentState: initialState
      }
    }

    componentWillMount() {
      dispatcher.register(action => {
        const newState = reducer(this.state.componentState, action)
        this.setState({ componentState: newState })
      })
    }
    
    render() {
      return (
        <MyComponent {...this.state.componentState} />
      )
    }
  }
}

export default withState;