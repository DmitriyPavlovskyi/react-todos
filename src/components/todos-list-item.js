import React from 'react';

export default class TodosListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }
// Для событий нужно биндить this, поскольку он будет терятся
  renderActionsSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    }
    // Всегда нужно при return оборачивать html в какой-то оборачивающий тэг!!
    return (
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button>Delete</button>
      </td>
    );
  }

  render () {
    return (
        <tr>
          <td>{this.props.task}</td>
          {this.renderActionsSection()}
        </tr>
    );
  }

// С помощью isEditing мы можем менять несколько вьюшек с разным наполнением.
// Состояние проверяется в функции renderActionsSection
  onEditClick() {
    this.setState({ isEditing: true });
  }

  onCancelClick() {
    this.setState({ isEditing: false });
  }
}
