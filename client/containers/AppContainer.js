import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import GlobalNav from '../components/shared/GlobalNav'

import * as AppActions from '../actions/app'

function mapStateToProps(state) {
  return {
    user: state.app.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch)
}

class AppContainer extends Component {
  componentDidMount() {
    // TODO: remove hard-coded URL.
    const url = "http://localhost:3001/users/1";

    this.props.loadUser(url);
  }

  render() {
    const { user } = this.props;

    return (<div>
      <GlobalNav {...user} location={this.props.location} />

      {this.props.children}
    </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
