import React, { Component } from 'react';
import { Mode } from '../App/App';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onComponentMount(Mode.CONTACT);
  }

  render() {
    return (
      <section>
        <h2>Contact</h2>
      </section>
    );
  }
}

export default Contact
