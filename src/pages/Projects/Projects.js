import React, { Component } from 'react';
import { Mode } from '../App/App';

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //console.log("Hello from Projects!");
    //console.log("Projects", this.props.onComponentMount);
    this.props.onComponentMount(Mode.PROJECTS);
  }

  render() {
    return (
      <section className="outerSection projectsSection">
        <article>
          {this.props.projectCards}
        </article>
      </section>
    );
  }
}

export default Projects
