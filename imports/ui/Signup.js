import React from "react";
import { Link } from "react-router";
import {Accounts} from 'meteor/accounts-base';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
  }
  onSubmit = event => {
    event.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    if (password.length < 9) {
      return this.setState({error: "Password must be more then 8 characters long"});
    }

    Accounts.createUser({email, password}, (err) => {
      if (err) {
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''});
      }
    });
  }
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Join Short link</h1>

            {this.state.error
                ? <p>
                    {this.state.error}
                </p>
                : undefined}

          <form className="boxed-view__form" onSubmit={this.onSubmit} noValidate>
            <input type="email" ref="email" name="email" placeholder="Email" />
            <input type="password" ref="password" name="password" placeholder="password" />
            <button className="button">Create Account</button>
          </form>
          <Link to="/">Have account?</Link>
        </div>
      </div>
    );
  }
}

export default Signup;
