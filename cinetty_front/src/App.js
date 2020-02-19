import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Modele simple du lien https://www.cinetty.com/id?021564

//NB: Pour indenter taper shift + alt + F

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    var number;

    //ajouter les fonctions crées:
    // this.nom_fonction = this.nom_fonction.bind(this);
    this.getIDPoubelle = this.getIDPoubelle.bind(this);
    this.updatePoubelle = this.updatePoubelle.bind(this);

  }

  getIDPoubelle() {
    //utiliser le path pour trouver l'id de la poubelle scannée avec son QR code

    const url = require('url')
    const qs = require('querystring')

    const serverHandle = function (req, res) {
      const route = url.parse(req.url)
      const path = route.pathname
      const params = qs.parse(route.query)

      res.writeHead(200, { 'Content-Type': 'text/plain' });

      if (path === '/id' && 'number' in params) {
        res.write('You are connected to trash n° ' + params['number'])
      } else {
        res.write('Try to scan a QR')
      }

      res.end();
    }

    console.log('number');
  }

  updatePoubelle(number) {
    //utilisé pour mettre à jour les infos de la poubelle

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
