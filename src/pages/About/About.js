import React, { Component } from 'react';
import { Mode } from '../App/App';
import './About.css';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onComponentMount(Mode.ABOUT);
    document.body.className = "aboutBG";
  }

  render() {
    return (
      <section className="outerSection aboutSection">
        <article>
          <section className="articleSubsection">
            <h2 className="subsectionTitle">Skills</h2>
            <p>
              JavaScript, Fortran, Python, React, Google Apps Script, jQuery, Liquid, HTML/CSS, C/C++, OpenMP, OpenACC, Git, Excel, SQL Server
            </p>
          </section>
          <section className="articleSubsection">
            <h2 className="subsectionTitle">Education</h2>
            <p>
              Master of Science, Computer Science. University of Delaware, 2020 - 2022.
            </p>
            <p>
              Continuing Education, Computer Science. University of Delaware, 2018 - 2019.
            </p>
            <p>
              Visiting Student, Computer Science and Mathematics. Delaware Technical Community College, 2016 - 2019.
            </p>
            <p>
              Bachelor of Music, Composition. University of Delaware, 2000 - 2005.
            </p>
          </section>
          <section className="articleSubsection">
            <h2 className="subsectionTitle">Experience</h2>
            <p>
              Student Assistant III. National Center for Atmospheric Research. 2020 - Present.
            </p>
            <p>
              Point of Sales Administrator. Harvest Market, 2017 - Present.
            </p>
            <p>
              Specialty Grocery Buyer. Harvest Market, 2014 - 2017.
            </p>
            <p>
              Producer & On-Air Host. 91.3FM WVUD, 2001 - 2016.
            </p>
          </section>
          <p>
            See more on <a href="https://www.linkedin.com/in/evanmacbride">LinkedIn</a>.
          </p>
        </article>
      </section>
    );
  }
}

export default About
