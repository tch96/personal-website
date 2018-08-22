import React, { Component } from 'react';
import './work.css';
import strayosIcon from '../../images/strayos_icon.png';
import sondareIcon from '../../images/sondare_icon.png';
import coollabIcon from '../../images/coollab_icon.png';
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';
import LazyLoad from 'react-lazy-load';

const MyCompanies = { "Strayos": 0, "Sondare": 1, "Coollab": 2 };

class Work extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewCompany: Array(3).fill(false)
    }
  }
  toggleCompany(i) {
    const newViewCompany = Array(3).fill(false);
    if (this.state.viewCompany[i] === false) {
      newViewCompany[i] = !newViewCompany[i];
    }
    this.setState({ "viewCompany": newViewCompany });
  }
  render() {
    return (
      <ScrollIntoViewIfNeeded
        options={{
          behavior: 'smooth',
          block: 'start',
        }}
        active={this.props.scrollToSelected}
        className="work">

        <div className="work-intro">
          <span className="section-title mobile">Work</span>
          <p> In my short and early career as an engineer, I've had the pleasure to work for a couple startups in the St. Louis area.
            I love software because it keeps me on my toes and I'm constantly pushed to learn new algorithms, languages,
            and frameworks everyday.
          </p>
          <p>
            I currently work as a <b>Full-Stack Engineer</b> at <a href="https://www.strayos.com">Strayos</a>, a 3D data analytics drone-image
          digitilization company based also in St. Louis. </p>

          <b>Click below to view more individual details:</b>
        </div>
        <div className="work-details">
          <div className="company">
          <LazyLoad className="center" offset={300}>
            <img className="company-icon" src={strayosIcon} alt="strayos-icon"
              onClick={() => { if (window.innerWidth < 830) this.toggleCompany(MyCompanies.Strayos) }}
              onMouseEnter={() => { if (window.innerWidth >= 830) this.toggleCompany(MyCompanies.Strayos) }}
            />
          </LazyLoad>
            <div className={["company-details", this.state.viewCompany[MyCompanies.Strayos] ? "active" : ""].join(' ')}>
              <p><u>Role:</u><br /><b>Full Stack Engineer</b> (May 2018 - present)</p>
              <u>What I work on:</u>
              <ul>
                <li> Implemented complete Role-Based Access Control workflow using <b>Angular2</b>, <b>Ruby On Rails (ActiveRecord)</b>, and <b>PostgreSQL</b>
                </li>
                <br />
                <li> Developing new Haul Road product module involving 3D image rendering and data analysis using <b>OpenLayers</b>, <b>Three.js</b>, and <b>D3.js</b>
                </li>
                <br />
                <li> Conducted unit-testing using <b>Postman</b> and <b>Jasmine framework</b> using the Angular CLI </li>
                <br />
                <li> Deployed code onto our <b>AWS</b> and <b>Azure</b> servers </li>
              </ul>
            </div>
          </div>

          <div className="company">
          <LazyLoad className="center" offset={300}>
            <img className="company-icon" src={sondareIcon} alt="sondare-icon"
              onClick={() => { if (window.innerWidth < 830) this.toggleCompany(MyCompanies.Sondare) }}
              onMouseEnter={() => { if (window.innerWidth >= 830) this.toggleCompany(MyCompanies.Sondare) }}
            />
          </LazyLoad>
            <div className={["company-details", this.state.viewCompany[MyCompanies.Sondare] ? "active" : ""].join(' ')}>
              <p><u>Role:</u><br /><b>Circuit Designer</b> (May 2017 - December 2017)</p>
              <u>What I worked on:</u>
              <ul>
                <li>
                  Wrote <b>Python</b> scripts to provide real-time acoustic analysis and filtering using the MATLAB Engine API
                </li>
                <br/>
                <li>
                  Worked with team of acoustic and mechanical engineers to design a patent-pending human echolocation device
                </li>
                <br />
                <li>
                  Assisted with patent drafting and submission
                </li>
              </ul>
            </div>
          </div>

          <div className="company">
          <LazyLoad className="center" offset={300}>
            <img className="company-icon" src={coollabIcon} alt="coollab-icon"
              onClick={() => { if (window.innerWidth < 830) this.toggleCompany(MyCompanies.Coollab) }}
              onMouseEnter={() => { if (window.innerWidth >= 830) this.toggleCompany(MyCompanies.Coollab) }}
              />
          </LazyLoad>
            <div className={["company-details", this.state.viewCompany[MyCompanies.Coollab] ? "active" : ""].join(' ')}>
              <p><u>Role:</u><br /><b>Summer Researcher</b> (July 2016 - August 2016)</p>
              <u>What I worked on:</u>
              <ul>
                <li>
                  Implemented & optimized MATLAB image processing scripts to improve resolution of optical coherence tomography (OCT) angiography scans under Dr. David Huang, M.D., Ph.D..
                </li>
                <br />
                <li>
                  Collected and analyzed data for macular retinal circulation and its correlation to glaucoma
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollIntoViewIfNeeded>
    )
  }
}
export default Work;