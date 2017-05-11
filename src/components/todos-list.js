import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

// Когда мы при создании компонента передаем в него какие-либо атрибуты, то они появятся в this.props
// Тут мы будем выводить наши задачи из коллекции
// ... -> ES6 spreading operator
// task={todo.task} isCompleted={todo.isCompleted} === ...todo
// {...this.props} так можно передать все методы дальше
export default class TodosList extends React.Component {
  renderItems() {
    const props = _.omit(this.props, 'todos');

    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />);
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
