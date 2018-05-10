import { Component } from 'react';
import dispatcher from './dispatcher'

function withState(MyComponent, reducers, initialState){
  return class WithState extends Component {

    constructor(){
      super()
      this.state = {
        componentState: initialState
      }
    }

    componentWillMount() {
      this.registryId = dispatcher.register(action => {
        const newState = reducers.reduce((state, r) => r(state, action) , this.state.componentState) 
        this.setState({ componentState: newState })
      })
    }
    
    componentWillUnmount() {
      dispatcher.unregister(this.registryId)  
    }
    
    
    render() {
      return (
        <MyComponent {...this.state.componentState} />
      )
    }
  }
}

export default withState;

