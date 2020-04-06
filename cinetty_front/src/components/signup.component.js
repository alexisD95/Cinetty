import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName : '',
      lastName : '',
      email : '',
      password : ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  handleSignup = (e) => {
    e.preventDefault();

    const user={
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "email": this.state.email,
      "password": this.state.password
    }

    console.log(user)

    axios.post('http://localhost:5000/signup/', user)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Signup</h3>
        
        <form onSubmit={this.handleSignup}>
          <label>
            <input type="text" name="firstName" value={this.state.username} placeholder="First Name" onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            <input type="text" name="lastName" value={this.state.username} placeholder="Last Name" onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            <input type="email" name="email" value={this.state.username} placeholder="E-mail" onChange={this.handleChange} />
          </label>
          <br></br>
          <label>
            <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} />
          </label>
          <br></br>
          <Button type="submit">
              <span>Signup</span>
          </Button>
        </form>

      </div>
    )
  }
}