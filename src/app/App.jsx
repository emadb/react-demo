import { Component} from 'react'
import ReactDOM from 'react-dom'
import TodoContainer from './TodoApp/TodoContainer'

import settings from 'settings'

require('../scss/style.scss')

class Main extends Component {
  render() {
    return (<div className="container"><TodoContainer /></div>)
  }
}

ReactDOM.render(<Main />, document.getElementById('main'))

module.hot.accept()