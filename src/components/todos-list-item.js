import React from 'react';

export default class TodosListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  renderTaskSection() {
    const { task, isCompleted } = this.props;
    // Можно посмотреть, что функция передалась в таску
    // console.log(this.props);

    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    }

    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={task} ref="editInput" />
          </form>
        </td>
      );
    }

    // <td>{this.props.task}</td>
    // из-за того что добавили строку const { task, isCompleted } = this.props; теперь можно использовать данные так
    // <td>{task}</td>
    return (
      <td style={taskStyle}
          onClick={this.props.toggleTask.bind(this, task)}
        >
          {task}
      </td>
    );
  }
// Для событий нужно биндить this, поскольку он будет терятся
  renderActionsSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
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
          {this.renderTaskSection()}
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

  onSaveClick(event) {
    event.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;

    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false});
  }
}
