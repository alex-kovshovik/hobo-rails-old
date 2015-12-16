import React, { Component } from 'react';
import Users from './components/lists/Users';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    // TODO: remove hard-coded URL.
    $.get("http://localhost:3001/users", (result) => {
      this.setState({
        users: result
      });
    });
  }

  render() {
    return (<div>
      <h1>Welcome to HOBO</h1>

      <small>Highly opinionated budget organizer</small>

      <h2>Users</h2>

      <Users users={this.state.users} />

      <h2>Expenses</h2>

      TO BE ADDED
    </div>);
  }
}
