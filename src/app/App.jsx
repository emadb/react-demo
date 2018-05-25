import { Component} from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter'

// require('../scss/style.scss')

class Main extends Component {
  render() {
    return (<Counter />)
  }
}

ReactDOM.render(<Main />, document.getElementById('main'))

module.hot.accept()