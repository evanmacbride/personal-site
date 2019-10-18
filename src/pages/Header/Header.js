import React from 'react';
import { Link } from 'react-router-dom';
import { Mode } from '../App/App';
import './Header.css';

const Header = (props) => (
  <header>
    <div className="appTitle">
      <h1><Link to='/'>Evan MacBride</Link></h1>
      {/*<h3>Front End Web Developer</h3>*/}
    </div>
    <nav>
      {props.appMode !== Mode.HOME && (
        <ul className="navList headerNavList">
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
