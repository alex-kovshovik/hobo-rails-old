import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

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
            <ul className="nav navbar-nav">
              <li className={this.props.location.pathname == '/expenses' ? 'active' : ''}><Link to="/expenses" activeClassName="active">Expenses <span className="sr-only">(current)</span></Link></li>
              <li className={this.props.location.pathname == '/budgets' ? 'active' : ''}><Link to="/budgets" activeClassName="active">Budgets</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><p className="navbar-text">Signed in as <b>{this.props.email}</b></p></li>
              <li><button type="button" className="btn btn-default navbar-btn">Logout</button></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
