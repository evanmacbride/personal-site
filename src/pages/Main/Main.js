import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';

class Main extends Component {
  constructor(props) {
    super(props);
    //this.handleComponentMount = this.handleComponentMount.bind(this);
  }

  /*handleComponentMount() {
    //console.log("Hello from main!");
    console.log("Main", this.props.onComponentMount);
    this.props.onComponentMount;
  }*/

  render() {
    return (
      <main>
        <Switch>
          <Route
            exact path='/'
            render={(props) => <Home
              {...props}
              onComponentMount={this.props.onComponentMount}
              />}
          />
          <Route
            path='/projects'
            render={(props) => <Projects
              {...props}
              onComponentMount={this.props.onComponentMount}
              />}
          />
          <Route
            path='/about'
            render={(props) => <About
              {...props}
              onComponentMount={this.props.onComponentMount}
              />}
          />
          <Route
            path='/contact'
            render={(props) => <Contact
              {...props}
              onComponentMount={this.props.onComponentMount}
              />}
          />
        </Switch>
      </main>
    );
  }
}

export default Main
