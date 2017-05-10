import React from 'react';
import TodosList from './todos-list';

const todos = [
  {
    task: 'go to work',
    isCompleted: true
  },
  {
    task: 'finish react app',
    isCompleted: false
  }
];

// Конструктор нужен для того, что бы передать todos в наш компонент для рендера
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    }
  }

  render () {
    return (
      <div>
        <h1>React ToDos App</h1>
        <TodosList todos={this.state.todos}/>
      </div>
    );
  }
}
