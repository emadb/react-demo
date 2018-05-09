import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoAdd extends Component {
  constructor(){
    super();
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    const text = this.refs.todoText.value;
    this.props.onAddTodo(text);
  }
  render() {
    return (
      <div className="card col-12">
      <div className="card-body">
        <div className="row">
          <div className="col-8">
            <input type="text" className="form-control" ref="todoText" /> 
          </div>
          <div className="col-4">
            <button className="btn btn-primary" onClick={this.addTodo}>Add</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

TodoAdd.propTypes = {
  onAddTodo: PropTypes.func.isRequired
}

TodoAdd.defaultProps = {
  onAddTodo: function () {}
}

export default TodoAdd;