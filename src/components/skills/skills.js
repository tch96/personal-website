import React, { Component } from 'react';
import './skills.css';
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

class Skills extends Component {

  render() {
    return (
      <ScrollIntoViewIfNeeded
      options={{
        behavior: 'smooth',
        block: 'start',
      }}
        active={this.props.scrollToSelected}
        className="skills">
        <span className="section-title mobile">Skills</span>
        <div>
          <div id="languages" className="skill-cat">
            <span className="cat-title">Languages</span>
            <div className="skill-entries">
              <div>
                <i className="devicon-javascript-plain skill-icon"></i>
                <span className="skill-name">JavaScript</span>
              </div>
              <div>
                <i className="devicon-typescript-plain skill-icon"></i>
                <span className="skill-name">TypeScript</span>
              </div>
              <div>
                <i className="devicon-java-plain skill-icon"></i>
                <span className="skill-name">Java</span>
              </div>
              <div>
                <i className="devicon-python-plain skill-icon"></i>
                <span className="skill-name">Python</span>
              </div>
              <div>
                <i className="devicon-cplusplus-plain skill-icon"></i>
                <span className="skill-name">C++</span>
              </div>
              <div>
                <i className="devicon-html5-plain skill-icon"></i>
                <span className="skill-name">HTML</span>
              </div>
              <div>
                <i className="devicon-css3-plain skill-icon"></i>
                <span className="skill-name">CSS</span>
              </div>
              <div>
                <i />
                <span className="skill-name">MATLAB</span>
              </div>
            </div>
          </div>

          <div id="frameworks" className="skill-cat">
            <span className="cat-title">Frameworks</span>
            <div className="skill-entries">
              <div>  
                <i className="devicon-angularjs-plain skill-icon"></i> 
                <span className="skill-name">AngularJS</span>
              </div>
              <div>
                <i className="devicon-react-plain skill-icon"></i> 
                <span className="skill-name">ReactJS</span>
              </div>
              <div>
                <i className="devicon-nodejs-plain skill-icon"></i> 
                <span className="skill-name">NodeJS</span>
              </div>
              <div>
                <i className="devicon-rails-plain skill-icon"></i> 
                <span className="skill-name">Ruby on Rails</span>
              </div>
              <div>
                <i className="devicon-d3js-plain skill-icon"></i>  
                <span className="skill-name">D3</span>
              </div>
              <div>
                <i />
                <span className="skill-name">OpenLayers</span>
              </div>
            </div>
          </div>

          <div id="Databases" className="skill-cat">
            <span className="cat-title">Databases</span>
            <div className="skill-entries">
              <div>
                <i className="devicon-postgresql-plain skill-icon"></i>  
                <span className="skill-name">PostgreSQL</span>
              </div>
              <div>
                <i className="devicon-mongodb-plain skill-icon"></i> 
                <span className="skill-name">MongoDB</span>
              </div>
              <div>
                <i className="devicon-mysql-plain skill-icon"></i> 
                <span className="skill-name">MySQL</span>
              </div>
            </div>
          </div>

          <div id="Tools" className="skill-cat">
            <span className="cat-title">Other Tools</span>
              <div className="skill-entries">
              <div>
                <i className="devicon-git-plain skill-icon"></i> 
                <span className="skill-name">Git</span>
              </div>
              <div>
                <i className="devicon-windows8-plain skill-icon"></i> 
                <span className="skill-name">Azure</span>
              </div>
              <div>
                <i/> 
                <span className="skill-name">GraphQL</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollIntoViewIfNeeded>
    )
  }
}
export default Skills;