import React, { Component } from 'react';
import { Mode } from '../App/App';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onComponentMount(Mode.CONTACT);
    document.body.className = "contactBG";
  }

  render() {
    return (
      <section className="outerSection contactSection">
        <h2 className="sectionTitle">Send me a message</h2>
        <article>
        <form name="send-message" method="post">
          <input type="hidden" name="form-name" value="send-message" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        </article>
      </section>
    );
  }
}

export default Contact
