import { Component } from 'react';

class Counter extends Component {

  constructor(){
    super()
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
    this.state = {counter: 0, resetEnabled: false}
  }

  increment() {
    const nextValue = this.state.counter + 1
    if (nextValue !== 0) {
      this.setState({counter: nextValue, resetEnabled: true})
    } else {
      this.setState({counter: nextValue, resetEnabled: false})
    }
  }

  decrement() {
    const nextValue = this.state.counter - 1
    if (nextValue !== 0) {
      this.setState({counter: nextValue, resetEnabled: true})
    } else {
      this.setState({counter: nextValue, resetEnabled: false})
    }
  }

  reset() {
    this.setState({counter: 0, resetEnabled: false})
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <div>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
        <div>
          <button onClick={this.reset} disabled={!this.state.resetEnabled}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter