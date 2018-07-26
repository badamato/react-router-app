import React, { Component } from 'react';
import './App.css';

import {Route} from 'react-router-dom';
import Navbar from './Navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Route path="/" exact={true} component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/bruce" component={Bruce} />
      </div>
    );
  }
}


const Home = (props) => {
  return (
    <div>
      <h1>Welcome Home!</h1>
    </div>
  );
}

const About = (props) => {
  return (
    <div>
      <h1>What do you want to talk about?</h1>
    </div>
  );
}

const Bruce = (props) => {
  return (
    <div>
      <h1>I LOVE YOU BRUCE!</h1>
    </div>
  );
}

const Landing = (props) => {
  return (
    <div>
      <h1>This is the landing page</h1>
    </div>
  );
}

export default App;
