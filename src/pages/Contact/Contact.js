import React, { Component } from 'react';
import { Mode } from '../App/App';
import './Contact.css';

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
            <label><span className="labelText">Your Name: </span><input type="text" name="name"/></label>
          </p>
          <p>
            <label><span className="labelText">Your Email: </span><input type="email" name="email"/></label>
          </p>
          <p>
            <label className="messageLabel"><span className="labelText">Message: </span><textarea name="message"></textarea></label>
          </p>
          <p className="submitP">
            <button type="submit">Send</button>
          </p>
        </form>
        </article>
      </section>
    );
  }
}

export default Contact
