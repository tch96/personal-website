import React, { Component } from 'react';
import './projects.css';
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';
import bridge from '../../images/bridge.jpg';
import blogsite from '../../images/blogsite.jpg';

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
                <h2><a href="http://timmys-blogsite.herokuapp.com/">Tumblr-esque Blogsite</a>
                  <a className="footer-icon" href="https://github.com/tch96/blogsite2.0">
                    <i className="fa fa-github" />
                  </a>
                </h2>
                <p> Revamped blogsite built on top of MERN stack, and Cloudinary for image management.
                  </p>
                <p>
                  The purpose of this project was to demonstrate the full-stack and Redux state management skillset that I learned during my summer internship, 
                  along with further experimentation with the React framework. 
                  The application is built upon the create-react-app template. Check it out!
                </p>

                <h3>Built with:</h3>
                <span> React, Redux, Express/Node, MongoDB </span>
              </div>

              <div className="img-container center">
                <img className="project-img" src={blogsite} alt="blogsite_pic"/>
              </div>
          </div>

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

            <div className="img-container center">
              <img className="project-img" src={bridge} alt="bridge_pic"/>
            </div>
          </div>
        </section>
      </ScrollIntoViewIfNeeded>
    )
  }
}
export default Projects;