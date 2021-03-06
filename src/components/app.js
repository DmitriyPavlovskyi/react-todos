import React from 'react';
import CreateTodo from './create-todo';
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
// таким образом в createTodo мы можем передавать методы в другие компоненты и в том компоненте будем иметь к ним доступ через this.props.createTask this.props.toggleTask this.saveTask
  // <CreateTodo todos={this.state.todos} таким образом можно прокинуть данные в наш компонент
  render () {
    return (
      <div>
        <h1>React ToDos App</h1>
        <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
        <TodosList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);

    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos });
  }
// С помощью state мы хотим передать значение из инпута из другого компонента в App
  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos });
  }
  // this.setState({}) делает render страницы (?)
  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);

    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({ todos: this.state.todos });
  }
}
