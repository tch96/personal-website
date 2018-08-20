import React, { Component } from 'react';
import './about.css';
import avatar from '../../images/avatar.jpg';
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';
import LazyLoad from 'react-lazy-load';

class About extends Component {
  render() {
    return (
      <ScrollIntoViewIfNeeded
        options={{
          behavior: 'smooth',
          block: 'start',
        }}
        active={this.props.scrollToSelected}
        className="me">
        <div className="center">
        <LazyLoad offset={300}>
          <img id="avatar" src={avatar} alt='Timothy_Chen.jpg' />
        </LazyLoad>
        </div>

        <div className="me-content">
          <h2>Hi there, it's Tim.</h2>
          <p>Welcome to my portfolio.
            Take your time and browse through some of my exciting experiences & projects that
            I have accumulated and built over the past few years as a software engineer.
          </p>

          <p>I'm a recent graduate from Washington University in St. Louis, with a B.S.
            in Electrical Engineering, and minor in Computer Science.
          </p>
          <p>
            I'm driven by the prospect of realizing the cause or idea that I'm 100% passionate about.
          I'm ambitious, I'm spontaneous, and I got all the time to explore the industry and the world.
          </p>

          <p>
            In my spare time, you'll see me playing sports, playing piano, or playing board games (Catan/Pandemic),
            poker, or trick-based card games. The more competitive, the better.
        </p>

          <p>And lastly... I live by the <i>Regret Minimization Framework</i></p>
        </div>
      </ScrollIntoViewIfNeeded>
    )
  }
}
export default About;