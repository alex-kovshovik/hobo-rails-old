import React, { Component } from 'react';

export default class Expense extends Component {
  render() {
    return (
        <form className="form form-horizontal">
          <div className="form-group">
            <input type="date" className="form-control" id="date" name="date" />
          </div>

          <div className="form-group">
            <input type="number" step="any" className="form-control" id="amount" name="amount" placeholder="How much?"/>
          </div>

          <div className="form-group">
            <input type="text" className="form-control" id="budget" name="budget" placeholder="Which budget?"/>
          </div>

          <div className="form-group">
            <input type="text" className="form-control" id="comment" name="comment" placeholder="Any comments?"/>
          </div>

          <button type="submit" className="btn btn-default">Log expense</button>
        </form>
    );
  }
}
