//import React, { Component } from 'react';
//
//export default class User extends Component {
//  render() {
//    return (
//      <div>
//        Welcome <b>{this.props.email}</b>
//      </div>
//    )
//  }
//}

//class NewUser extends Component {
//  render() {
//    return (
//        <form>
//          <div className="form-group">
//            <label htmlFor="name">Name</label>
//            <input type="text" className="form-control" id="name" name="name" placeholder="What is your name?"/>
//          </div>
//
//          <div className="form-group">
//            <label htmlFor="email">Email</label>
//            <input type="email" className="form-control" id="email" name="email" placeholder="What is your email?"/>
//          </div>
//
//          <div className="form-group">
//            <label htmlFor="address">Address</label>
//            <input type="text" className="form-control" id="address" name="address" placeholder="Waht's your address?"/>
//          </div>
//
//          <button type="submit" className="btn btn-default">Submit</button>
//        </form>
//    );
//  }
//}

//export default class Users extends Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      users: []
//    };
//  }
//
//  render() {
//    return (
//        <div>
//          <div className="row">
//            <div className="col-md-6">
//              <h2>Current user:</h2>
//
//              <ul>
//                {this.props.users.map((user) => <User key={user.id} {...user} />)}
//              </ul>
//            </div>
//
//            <div className="col-md-6">
//              <h2>New user</h2>
//
//              <NewUser />
//            </div>
//          </div>
//
//        </div>
//    );
//  }
//}
