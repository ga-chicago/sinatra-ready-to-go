var React     = require('react');
var ReactDOM  = require('react-dom');
var request   = require('superagent');

var Router = React.createClass({
  render: function() {
    return (
      <div className="container">
        {this.state.registered ? <UserView /> : <RegisterForm />}
      </div>
    );
  }
});

var RegisterForm = React.createClass({
  render: function() {
    return (
      <form action="#" method="post">
        <input type="text" name="username" placeholder="Choose a username" />
        <br />
        <input type="password" name="password" placeholder="Choose a password" />
        <br />
        <input type="email" name="email" placeholder="Email address" />
        <br />
        <button>Sign up</button>
      </form>
    );
  }
});

var UserView = React.createClass({
  render: function() {
    return (
      <div className="userinfo">
        <ul>
          <li>Username: {this.props.username}</li>
          <li>Email: {this.props.email}</li>
          <li>Password: {this.props.password}</li>
        </ul>
      </div>
    );
  }
})

ReactDOM.render(<Router youSuck={true} />, document.getElementById('react-app'));
