import React from 'react';
import { Link } from 'react-router-dom';
import { Mode } from '../App/App';

const Header = (props) => (
  <header>
    <h1>Evan MacBride</h1>
    <h3>Front End Web Developer</h3>
    <nav>
      {props.appMode !== Mode.HOME && (
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            {props.appMode === Mode.PROJECTS ? <span className="activePage">Projects</span> :
            <Link to='/projects'>Projects</Link>}
          </li>
          <li>
            {props.appMode === Mode.ABOUT ? <span className="activePage">About</span> :
            <Link to='/about'>About</Link>}
          </li>
          <li>
            {props.appMode === Mode.CONTACT ? <span className="activePage">Contact</span> :
            <Link to='/contact'>Contact</Link>}
          </li>
        </ul>
      )}
    </nav>
  </header>
)

export default Header
