import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';

class Main extends Component {
  constructor(props) {
    super(props);
  }

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
              projectCards={this.props.projectCards}
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
