import React, { Component } from 'react';
import { Mode } from '../App/App';

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onComponentMount(Mode.PROJECTS);
    document.body.className = "projectsBG";
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
