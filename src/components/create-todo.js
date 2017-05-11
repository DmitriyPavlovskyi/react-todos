import React from 'react';

export default class TodosList extends React.Component {

  render () {
    console.log(this);
    console.log(this.props.todos);
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type = "text" placeholder = "What do I need to do?" ref="createInput"/>
        <button>Create</button>
      </form>
    );
  }
// С помощью ref можно привязать дом элемент и иметь к нему доступ в будущем
  handleCreate(event) {
    event.preventDefault();

    // console.log(this.refs.createInput);
    // console.log(this.props.createTask);

    this.props.createTask(this.refs.createInput.value);
  }
}
