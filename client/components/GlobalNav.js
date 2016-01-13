import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import activeComponent from 'react-router-active-component'

import AuthenticatedContainer from '../containers/AuthenticatedContainer'

const NavLink = activeComponent('li')

export default class GlobalNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">HOBO</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <AuthenticatedContainer email={this.props.email}>
              <ul className="nav navbar-nav">
                <NavLink to="expenses">Expenses <span className="sr-only">(current)</span></NavLink>
                <NavLink to="budgets" activeClassName="active">Budgets</NavLink>
              </ul>
            </AuthenticatedContainer>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/signup">Sign Up</Link></li>
              <li><p className="navbar-text">Welcome, <b>{this.props.email}</b></p></li>
              <li><button type="button" className="btn btn-default navbar-btn">Logout</button></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
