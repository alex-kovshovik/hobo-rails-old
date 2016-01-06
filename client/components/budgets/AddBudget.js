import React, { Component, PropTypes } from 'react';

export default class AddBudget extends Component {
  static propTypes = {
    createBudget: PropTypes.func.isRequired
  };

  resetForm(e) {
    const {name, amount, mode} = this.refs;

    amount.value = '';
    name.value = '';
    mode.value = '';

    name.focus(e);
  }

  handleSubmit(e) {
    e.preventDefault();

    const {name, amount, mode} = this.refs;
    const url = "http://localhost:3001/budgets";

    if (name && amount && mode) {
      this.props.createBudget(url, name.value, amount.value, mode.value);

      this.resetForm(e);
    }
    else {
      // TODO: improve form validation.
      console.log('Incomplete form data...');
    }
  }

  render() {
    return (<form onSubmit={e => this.handleSubmit(e)}>
      <div className="form-group">
        <input type="text" className="form-control" id="name" ref="name" placeholder="What for?" />
      </div>

      <div className="form-group">
        <input type="number" step="any" className="form-control" id="amount" ref="amount" placeholder="What is the lowest you could go?"/>
      </div>

      <div className="form-group">
        <input type="text" className="form-control" id="mode" ref="mode" placeholder="Budget mode"/>
      </div>

      <button type="submit" className="btn btn-default">Add budget</button>
    </form>)
  }
}
