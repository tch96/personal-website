import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import About from './components/about/about';
import Work from './components/work/work';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';
import Skills from './components/skills/skills';

export const Sections = { "Me": 0, "Work": 1, "Projects": 2, "Skills": 3 };
let numSections = Object.keys(Sections).length;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSideNav: false,
      sectionSelect: Array(numSections).fill(false)
    }
  }
  toggleSideNav() {
    this.setState({ "toggleSideNav": !this.state.toggleSideNav });
  }
  goToSection(i) {
    const newSectionSelect = Array(numSections).fill(false);
    newSectionSelect[i] = !newSectionSelect[i];
    this.setState({
      sectionSelect: newSectionSelect
    });
  }
  render() {
    return (
      <div className={["main-app", this.state.toggleSideNav ? "sideNavOpen" : "sideNavClose"].join(' ')}>
        <Header
          toggleSideNav={() => this.toggleSideNav()}
          goToSection={(i) => this.goToSection(i)}
          viewSideNav={this.state.toggleSideNav}
          sectionSelected = {this.state.sectionSelect}
        />
        <div className="content">
            <About scrollToSelected={this.state.sectionSelect[Sections.Me]}/>
            <Work scrollToSelected={this.state.sectionSelect[Sections.Work]}/>
            <Projects scrollToSelected={this.state.sectionSelect[Sections.Projects]}/>
            <Skills scrollToSelected={this.state.sectionSelect[Sections.Skills]}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
