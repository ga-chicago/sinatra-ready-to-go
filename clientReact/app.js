var React     = require('react');
var ReactDOM  = require('react-dom');
var request   = require('superagent');

var Router = React.createClass({
  getInitialState: function() {
    return {
      registered: false,
      currentUser: null
    };
  },
  registration: function(user) {
    var self = this,
        state = this.state;

    request.post('/users/')
      .type('form')
      .send({
        username: user.username,
        email: user.email,
        password: user.password
      })
      .end(function(err, response) {
        if (err) {
          console.log(err);
          alert('ERROR');
        } else {
          response = JSON.parse(response.text);
          state.registered  = true;
          state.currentUser = response.id

          console.log(response);

          self.setState(state);
        }
      });
  },
  render: function() {
    return (
      <div className="container">
        {this.state.registered ? <UserView userid={this.state.currentUser} /> : <RegisterForm register={this.registration} />}
      </div>
    );
  }
});

var RegisterForm = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: '',
      email: ''
    }
  },
  updateUsername: function(e) {
    var state = this.state;
    state.username = e.target.value;

    this.setState(state);
    console.log(this.state);
  },
  updatePassword: function(e) {
    var state = this.state;
    state.password = e.target.value;

    this.setState(state);
    console.log(this.state);
  },
  updateEmail: function(e) {
    var state = this.state;
    state.email = e.target.value;

    this.setState(state);
    console.log(this.state);
  },
  register: function(e) {
    e.preventDefault();
    var user = this.state;
    this.props.register(user);
  },
  render: function() {
    return (
      <form action="#" method="post">
        <input type="text" name="username" placeholder="Choose a username" onChange={this.updateUsername} />
        <br />
        <input type="password" name="password" placeholder="Choose a password" onChange={this.updatePassword} />
        <br />
        <input type="email" name="email" placeholder="Email address" onChange={this.updateEmail} />
        <br />
        <button onClick={this.register}>Sign up</button>
      </form>
    );
  }
});

var UserView = React.createClass({
  componentDidMount: function() {
    var self  = this,
        state = this.state;

    request.get('/users/' + this.props.userid)
      .end(function(err, response) {
        if (err) {
          alert('ERROR');
          console.log(err);
        } else {
          response = JSON.parse(response.text)
          
          state.username = response.username;
          state.email = response.email;
          state.password = response.password;

          self.setState(state);
        }
      });
  },
  getInitialState: function() {
    return {
      username: null,
      email: null,
      password: null
    }
  },
  render: function() {
    return (
      <div className="userinfo">
        <ul>
          <li>Username: {this.state.username}</li>
          <li>Email: {this.state.email}</li>
          <li>Password: {this.state.password}</li>
        </ul>
      </div>
    );
  }
})

ReactDOM.render(<Router />, document.getElementById('react-app'));
