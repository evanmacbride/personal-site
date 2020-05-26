import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Mode } from '../App/App';
import "./Home.css"

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onComponentMount(Mode.HOME);
    document.body.className = "homeBG";
  }

  render() {
    return (
      <section>
        <nav>
          <ul className="navList homeNavList">
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
        <article>
          <p className="homeBlurb">
            Hi, I'm Evan. I'm a software developer from Wilmington, Delaware.
          </p>
        </article>
      </section>
    );
  }
}

export default Home
