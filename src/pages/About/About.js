import React, { Component } from 'react';
import { Mode } from '../App/App';
import './About.css';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onComponentMount(Mode.ABOUT);
  }

  render() {
    return (
      <section className="outerSection aboutSection">
        <article>
          <section className="articleSubsection">
            <h2 className="subsectionTitle">Skills</h2>
            <p>
              JavaScript, React, jQuery, HTML/CSS, Python, C/C++, Excel, SQL Server
            </p>
          </section>
          <section className="articleSubsection">
            <h2 className="subsectionTitle">Education</h2>
            <p>
              Continuing Education, Computer Science. University of Delaware, 2018 - Present.
            </p>
            <p>
              Visiting Student, Computer Science and Mathematics. Delaware Technical Community College, 2016 - 2019.
            </p>
            <p>
              Bachelor of Music, Composition. University of Delaware, 2005.
            </p>
          </section>
          <section className="articleSubsection">
            <h2 className="subsectionTitle">Experience</h2>
            <p>
              Point of Sales Administrator. Harvest Market, 2017 - Present.
            </p>
            <p>
              Specialty Grocery Buyer. Harvest Market, 2014 - 2017.
            </p>
            <p>
              Instructor. Community Music School, University of Delaware, 2006 - 2007.
            </p>
            <p>
              Attendant. Music Resource Center, University of Delaware, 2001 - 2008.
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
