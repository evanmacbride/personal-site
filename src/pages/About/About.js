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
            <p>Mauris volutpat at arcu eget consectetur. Proin pretium efficitur augue, ac tempor enim. Et feugiat ante gravida et. Id dignissim felis fermentum.</p>
          </section>
          <section className="articleSubsection">
            <h2 className="subsectionTitle">Education</h2>
            <p>Nunc euismod turpis et libero venenatis, vitae bibendum libero bibendum.</p>
            <p>Integer semper enim in tempus condimentum.</p>
            <p>Duis consectetur nisi vitae ipsum semper, id dignissim felis fermentum.</p>
          </section>
          <section className="articleSubsection">
            <h2 className="subsectionTitle">Experience</h2>
            <p>Aliquam lacinia, nisl fringilla condimentum consectetur.</p>
            <p>Nunc orci facilisis sem, ut malesuada dolor nibh vel est.</p>
            <p>Curabitur placerat dolor neque, et feugiat ante gravida et.</p>
          </section>
        </article>
      </section>
    );
  }
}

export default About
