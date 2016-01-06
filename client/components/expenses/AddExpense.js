import React, { Component, PropTypes } from 'react';

export default class AddExpense extends Component {
  static propTypes = {
    createExpense: PropTypes.func.isRequired
  };

  resetForm(e) {
    const {amount, comment} = this.refs;

    amount.value = '';
    comment.value = '';

    amount.focus(e);
  }

  handleSubmit(e) {
    e.preventDefault();

    const {date, amount, budget, comment} = this.refs;
    const url = "http://localhost:3001/expenses";

    if (date && amount && budget) {
      this.props.createExpense(url, date.value, amount.value, budget.value, comment.value);

      this.resetForm(e);
    }
    else {
      console.log('Incomplete form data...'); // TODO: improve form validation.
    }
  }

  render() {
    return (<form onSubmit={e => this.handleSubmit(e)}>
      <div className="form-group">
        <input type="date" className="form-control" id="date" ref="date" />
      </div>

      <div className="form-group">
        <input type="number" step="any" className="form-control" id="amount" ref="amount" placeholder="How much?"/>
      </div>

      <div className="form-group">
        <input type="text" className="form-control" id="budget" ref="budget" placeholder="Which budget?"/>
      </div>

      <div className="form-group">
        <input type="text" className="form-control" id="comment" ref="comment" placeholder="Any comments?"/>
      </div>

      <button type="submit" className="btn btn-default">Log expense</button>
    </form>)
  }
}
