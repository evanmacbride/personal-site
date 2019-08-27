import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const Mode = {
  HOME: 0,
  PROJECTS: 1,
  ABOUT: 2,
  CONTACT: 3
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      appMode: Mode.HOME
    };
    this.handleComponentMount = this.handleComponentMount.bind(this);
  }

  handleComponentMount(mode) {
    //console.log("Hello from App!");
    this.setState({ appMode: mode });
  }

  render() {
    return (
      <div>
        <Header appMode={this.state.appMode}/>
        <Main onComponentMount={this.handleComponentMount}/>
        <Footer />
      </div>
    );
  }
}

export { Mode, App };
