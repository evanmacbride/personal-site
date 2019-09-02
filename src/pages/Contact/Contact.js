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
      <section className="outerSection contactSection">
        <h2 className="sectionTitle">Contact</h2>
        <article>
          <p>
            Quisque consectetur consequat quam, non molestie libero aliquet vel. Etiam interdum aliquam lectus, sit amet blandit ante auctor quis. In sed pretium dolor. Nam nulla elit, lobortis id consectetur id, maximus quis ex. In hendrerit ut ex at bibendum. Sed tempor est quam, vel pulvinar ex semper a. Cras consectetur magna sed erat laoreet, nec tincidunt ex porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </article>
      </section>
    );
  }
}

export default Contact
