import { Component} from 'react'
import ReactDOM from 'react-dom'

require('../scss/style.scss')

class Main extends Component {
  render() {
    return (<div>Hello World!</div>)
  }
}

ReactDOM.render(<Main />, document.getElementById('main'))

module.hot.accept()