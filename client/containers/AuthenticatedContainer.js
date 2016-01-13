import React, { Component, PropTypes } from 'react'

export default class AuthenticatedContainer extends Component {
  static propTypes = {
    email: PropTypes.string.isRequired
  };

  render() {
    const { email } = this.props;

    return (<div>
      {email && this.props.children}
    </div>);
  }
}
