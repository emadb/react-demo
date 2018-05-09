import { Component} from 'react'
import ReactDOM from 'react-dom'
import PostList from './PostList'

require('../scss/style.scss')

class Main extends Component {
  render() {
    return (<div><PostList /></div>)
  }
}

ReactDOM.render(<Main />, document.getElementById('main'))

module.hot.accept()