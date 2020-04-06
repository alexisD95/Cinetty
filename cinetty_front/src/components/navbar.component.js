import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo_slogan from '../cinetty_logo.png';
import { Button } from 'reactstrap';

export default class Navbar extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      email : '',
      password : ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  handleSignin = (e) => {
    e.preventDefault();

    const user={
      "email": this.state.email,
      "password": this.state.password
    }

    console.log("[navbar] user email sent to signin : " + user.email)
    console.log("[navbar] user password sent to signin : " + user.password)

    axios.post('http://localhost:5000/signin/', user)
      .then(res => {
        this.props.changeToken(res.data)
      });

    //window.location = '/';
  }
    
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a className="navbar-brand" href="#">
          <img src={logo_slogan} alt="Logo"/>
        </a>
        <div className="collpase navbar-collapse">

          <form onSubmit={this.handleSignin}>
            <label>
              <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} />
            </label>
            <label>
              <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} />
            </label>
            <Button type="submit">
              <span>Signin</span>
            </Button>
          </form>

          <Link to="/signup">
            <Button>
              <span>Signup</span>
            </Button>
          </Link>

        </div>
      </nav>
    );
  }
}