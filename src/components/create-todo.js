import React from 'react';

export default class TodosList extends React.Component {

  render () {
    console.log(this);
    console.log(this.props.todos);
    return (
      <form>
        <input type = "text" placeholder = "What do I need to do?" />
        <button>Create</button>
      </form>
    );
  }
}
