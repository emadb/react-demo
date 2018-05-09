import { Component } from 'react';

class MyForm extends Component {

  constructor(){
    super()
    this.state = {text: '', inputText: ''}

    this.handleClick = this.handleClick.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange(evt) {
    this.setState({inputText: evt.target.value})
  }

  handleClick() {
    // leggere il valore della textbox
    // const newValue = this.refs.textToShow.value

    this.setState({text: this.state.inputText})
  }

  render() {
    return (
      <div>
        <input type="text" 
          onChange={this.handleTextChange} />

        <button onClick={this.handleClick} >Say hello</button>
        <h3>{'hello ' + this.state.text}</h3>
      </div>
    );
  }
}

export default MyForm;