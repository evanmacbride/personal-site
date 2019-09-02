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
        <h2 className="sectionTitle">Projects</h2>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus interdum tincidunt. Vivamus hendrerit nibh a erat tempus, eget facilisis est imperdiet. Praesent mattis accumsan ipsum sed auctor. Suspendisse potenti. Nam aliquet, ante ut molestie venenatis, justo ante consectetur urna, eget pretium odio nisl ac eros. Quisque pulvinar aliquet lectus eget mattis. Aliquam ac quam ullamcorper, malesuada sapien sit amet, pellentesque lacus.
          </p>
          {this.props.projectCards}
        </article>
      </section>
    );
  }
}

export default Projects
