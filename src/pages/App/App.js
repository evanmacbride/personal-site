import React, { Component } from 'react';
import '../../normalize.css';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const Mode = {
  HOME: 0,
  PROJECTS: 1,
  ABOUT: 2,
  CONTACT: 3
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      appMode: Mode.HOME,
      projectCards: null
    };
    this.handleComponentMount = this.handleComponentMount.bind(this);
  }

  handleComponentMount(mode) {
    this.setState({ appMode: mode });
  }

  componentDidMount() {
    fetch("https://api.github.com/users/evanmacbride/repos?sort=updated")
      .then(response => response.json())
      .catch(err => {
        console.log(err);
        return Promise.reject(err);
      })
      .then(response => {
        let projectsArray = response.map((data, index) => {
          if (data.description) {
            //console.log(data);
            const d = new Date(data.pushed_at)
            return (
              <div className="projectCard" key={index}>
                <h2>{data.name}</h2>
                <h3>{data.description} (Last commit {d.toLocaleString()})</h3>
                <ul className="projectLinks">
                  <li><a href={data.html_url}>GitHub</a></li>
                  {data.homepage && <li><a href={data.homepage}>Project Website</a></li>}
                </ul>
              </div>
            );
          } else {
            return null;
          }
        })
        this.setState({ projectCards: projectsArray });
      });
  }

  render() {
    return (
      <div className="wrapAll">
        <div className="wrapAboveFooter">
          <Header appMode={this.state.appMode}/>
          <Main
            onComponentMount={this.handleComponentMount}
            projectCards={this.state.projectCards}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export { Mode, App };
