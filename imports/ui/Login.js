import React from "react";
import { Link } from "react-router";
import { Meteor } from "meteor/meteor";



class Login extends React.Component {
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

    Meteor.loginWithPassword({ email }, password, err => {
      if (err) {
        this.setState({error: 'Unuble to login. Check Login and password!'});
      } else {
        this.setState({error: ''});
      }
    });
  };
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Short Link Login</h1>

            {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form className="boxed-view__form" onSubmit={this.onSubmit} noValidate>
            <input type="email" ref="email" name="email" placeholder="Email" />
            <input
                type="password"
                ref="password"
                name="password"
                placeholder="password"
            />
            <button className="button">Login</button>
          </form>
          <Link to="/signup">Need to register?</Link>
        </div>
      </div>
    );
  }
}

export default Login;
