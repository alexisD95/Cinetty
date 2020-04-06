import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';

import Navbar from "./components/navbar.component";
import CreateReport from "./components/create-report.component";
import Thanks from "./components/thanks.component";
import Signup from "./components/signup.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token : '',
      priviledge : 0,
      isValid : false,
    }
  }
  
  componentDidUpdate() {
    const token={
      "token": this.state.token
    }
    
    axios.post('http://localhost:5000/verify/', token)
      .then(res => {
        this.setState({ isValid : res.data.isValid });
      });

    console.log("[app] componentdidmount isValid : " + this.state.isValid)
  }
  
  changeToken = (e) => {
    this.setState({ token : e.token, priviledge : e.priviledge });

    console.log("[app] changetoken token : " + this.state.token); 
    console.log("[app] changetoken priviledge : " + this.state.priviledge); 
  }

//conditions to render
/*
{this.state.priviledge > 0 &&
        <h2>
          Vous avez {unreadMessages.length} message(s) non-lu(s).
        </h2>
      }
*/

  render() {
    return (  
        <Router>

        <div className="container">
          <Navbar changeToken={this.changeToken}/>
          <br/>
          <Route path="/" exact component={CreateReport} />
          <Route path="/thanks" exact component={Thanks} />
          <Route path="/signup" exact component={Signup} />
        </div>

      </Router>
    );
  }
}

export default App;
