import React from 'react';
import Router from './Router';
import {NavLink } from 'react-router-dom';

const Navigation = (props) => (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/cart'>Cart</NavLink></li>
    </ul>
  </nav>
);

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Router />
      </React.Fragment>
    );
  }
}

export default App;
