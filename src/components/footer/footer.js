import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <a className="footer-icon" href="https://www.facebook.com/timmychen827">
            <i className="fa fa-facebook-square" />
          </a>
          <a className="footer-icon" href="https://www.linkedin.com/in/tch96/">
            <i className="fa fa-linkedin-square" />
          </a>
          <a className="footer-icon" href="https://github.com/tch96">
            <i className="fa fa-github-square" />
          </a>
          <a className="footer-icon" onClick={()=>window.open('mailto:timothychn96@gmail.com')}>
            <i className="fa fa-envelope-square"></i>
          </a>
        </div>
        <a className="footer-icon resume" href="/resume.pdf">
              <i className="fa fa-file-pdf-o" />
              <span className="footer-txt">Grab a resume here!</span>
          </a>
      </footer>
    )
  }
}
export default Footer;