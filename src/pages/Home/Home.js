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
  }

  render() {
    return (
      <section>
        <nav className="homeNavList">
          <ul>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
      </section>
    );
  }
}

export default Home
