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

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>React ToDos App</h1>
        <TodosList />
      </div>
    );
  }
}
