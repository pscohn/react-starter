import React, { Component, PropTypes as T } from 'react';
import { findDOMNode } from 'react-dom';

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.onSaveEditTodo = this.onSaveEditTodo.bind(this);
    this.onBeginEditTodo = this.props.onBeginEditTodo.bind(this, this.props.todo.id);
    this.onDoneEditTodo = this.props.onDoneEditTodo.bind(this, this.props.todo.id);
    this.onToggleTodo = this.props.onToggleTodo.bind(this, this.props.todo.id);
    this.onDeleteTodo = this.props.onDeleteTodo.bind(this, this.props.list.id, this.props.todo.id);
  }

  static propTypes = {
    onBeginEditTodo: T.func.isRequired,
    onSaveEditTodo: T.func.isRequired,
    onDoneEditTodo: T.func.isRequired,
    onToggleTodo: T.func.isRequired,
    onDeleteTodo: T.func.isRequired,
    onDropTodo: T.func.isRequired,
  }

  onSaveEditTodo() {
    this.props.onSaveEditTodo(this.props.todo.id, this._todoContent.value);
  }

  render() {
    if (this.props.todo.isEditing === true) {
      return (
        <div className="todo editing">
          <input type="text" ref={(cmp) => this._todoContent = cmp} onChange={this.onSaveEditTodo} value={this.props.todo.content} />
          <IconButton iconClassName="fa fa-check" onClick={this.onDoneEditTodo} label="Done" />
        </div>
      );
    }

    return (
      <div className="todo" style={{ opacity }}>
        <span onClick={this.onBeginEditTodo}>{this.props.todo.content}</span>
        <IconButton iconClassName="fa fa-check" onClick={this.onToggleTodo} label={this.props.todo.isComplete ? 'Uncomplete' : 'Complete'} />
        <IconButton iconClassName="fa fa-trash" onClick={this.onDeleteTodo} label="Delete" />
      </div>
    );
  }
}

export default Todo;
