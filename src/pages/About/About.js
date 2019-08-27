import React, { Component } from 'react';
import { Mode } from '../App/App';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onComponentMount(Mode.ABOUT);
  }

  render() {
    return (
      <section>
        <h2>About</h2>
      </section>
    );
  }
}

export default About
