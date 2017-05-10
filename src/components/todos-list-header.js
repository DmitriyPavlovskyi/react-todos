import React from 'react';
import TodosList from './todos-list';

export default class TodosListHeader extends React.Component {
  render () {
    return (
      <thead>
        <tr>
          <th>Task</th>
          <th>Action</th>
        </tr>
      </thead>
    );
  }
}
