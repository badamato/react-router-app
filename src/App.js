import React, { Component } from 'react';

import {Route, Link} from 'react-router-dom';
import Navbar from './Navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Route path="/" exact component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/bruce" component={Bruce} />
        <Route path="/bruce/:bruce" component={anotherBruce} />
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

const formatAsLink = (toUrl, name) => {
  return <li><Link to={toUrl}>{name}</Link></li>
}

const Bruce = (props) => {
  let allBruce = [
    'Brock',
    'Gaston',
    'Gus'
  ];
  return (
    <div>
      <h1>I LOVE YOU BRUCE!</h1>
      <ul>
      {allBruce.map(bruce => formatAsLink(`${props.match.url}/${bruce}`, bruce))}
      </ul>
    </div>
  );
}

const anotherBruce = (props) => {
  return (
    <div>
      <h1>A specific Bruce!</h1>
      <h2>{props.match.params.bruce}</h2>
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
