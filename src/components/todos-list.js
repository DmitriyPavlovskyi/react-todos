import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

// Когда мы при создании компонента передаем в него какие-либо атрибуты, то они появятся в this.props
// Тут мы будем выводить наши задачи из коллекции
// ... -> ES6 spreading operator
// task={todo.task} isCompleted={todo.isCompleted} === ...todo
export default class TodosList extends React.Component {
  renderItems() {
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} />)
  }


  render () {
    console.log(this);
    console.log(this.props.todos);
    return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
