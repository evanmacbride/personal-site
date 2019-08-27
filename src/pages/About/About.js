import React, { Component } from 'react';
import { Mode } from '../App/App';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onComponentMount(Mode.ABOUT);
  }

  render() {
    return (
      <section>
        <h2>About</h2>
        <article>
          Mauris volutpat at arcu eget consectetur. Proin pretium efficitur augue, ac tempor enim. Nunc euismod turpis et libero venenatis, vitae bibendum libero bibendum. Integer semper enim in tempus condimentum. Duis consectetur nisi vitae ipsum semper, id dignissim felis fermentum. Aliquam lacinia, nisl fringilla condimentum consectetur, nunc orci facilisis sem, ut malesuada dolor nibh vel est. Curabitur placerat dolor neque, et feugiat ante gravida et. 
        </article>
      </section>
    );
  }
}

export default About
