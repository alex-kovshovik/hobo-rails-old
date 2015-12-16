import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div>
        <b>{this.props.email}</b> created at <b>{this.props.created_at}</b>
      </div>
    )
  }
}

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  render() {
    return (
        <ul>
          {this.props.users.map((user) => <User key={user.id} {...user} />)}
        </ul>
    );
  }
}
