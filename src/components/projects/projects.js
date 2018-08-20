import React, { Component } from 'react';
import './projects.css';
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';
import bridge from '../../images/bridge.png';

class Projects extends Component {
  render() {
    return (
      <ScrollIntoViewIfNeeded
        options={{
          behavior: 'smooth',
          block: 'start',
        }}
        active={this.props.scrollToSelected}
        className="projects">
        <span className="section-title mobile">Projects</span>
        <section className="projectsList">
          <div className="project-content">
            <div className="project-desc">
              <h2><a href="http://play-bridge.herokuapp.com/">Online Multiplayer Bridge Application</a>
                <a className="footer-icon" href="https://github.com/tch96/bridge">
                  <i className="fa fa-github" />
                </a>
              </h2>
              <p> A simple web application that allows for 4 friends to join game rooms
                to play classic bridge with one another. Includes chat room functionality as well.
                </p>
              <p>
                This app was my intro into Node, while dwelling into event-based bi-directional
                server/client communication using Socket.IO. 
                </p>

              <h3>Built with:</h3>
              <span> NodeJS, Socket.IO </span>
              
              

            </div>
              <img src={bridge} alt="bridge_pic"/>
          </div>

          <div className="project-content">
          </div>
        </section>
      </ScrollIntoViewIfNeeded>
    )
  }
}
export default Projects;