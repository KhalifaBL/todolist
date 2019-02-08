import React, { Component } from "react";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
class Addform extends Component {
  state = {
    content: ""
  };
  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.content) {
      this.props.addTodo(this.state);
      this.setState({
        content: ""
      });
    } else {
      NotificationManager.error(
        "You didn't enter any todos!",
        "Ooops!",
        5000,
        () => {
          alert("callback");
        }
      );
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new Todo</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}
export default Addform;
