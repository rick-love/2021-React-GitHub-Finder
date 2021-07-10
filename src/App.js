import React, { Component } from 'react';
import './assets/main.css';


class App extends Component {
  render() {
    function Welcome(props) {
      return <h1>Designed by the {props.name.toUpperCase()}</h1>;
    }

    const element = <Welcome name='Rick Love' />;
    return <div className='App'>GitHub Finder {element} </div>;
  }
}

export default App;
