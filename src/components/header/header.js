import React, { Component } from 'react';
import './header.css';
import logo from '../../images/signature.png';
import SideNav from '../sideNav/sideNav';
import {Sections} from '../../App';
import LazyLoad from 'react-lazy-load';
import Pdf from '../../resume.pdf';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo desktop">
                <LazyLoad offset={300} className="logo">
                    <img id="logo" src={logo} alt="Timothy_Chen_signature"></img>
                </LazyLoad>
                </div>
                <a id="me-nav" 
                    className={["navButton", "desktop", this.props.sectionSelected[Sections.Me] ? "sectionActive" : ""].join(' ')}
                    onClick={() => this.props.goToSection(Sections.Me)}>Me
                </a>
                <a id="work-nav" 
                    className={["navButton", "desktop", this.props.sectionSelected[Sections.Work] ? "sectionActive" : ""].join(' ')}
                    onClick={() => this.props.goToSection(Sections.Work)}>Work
                </a>
                <a id="projects-nav" 
                    className={["navButton", "desktop", this.props.sectionSelected[Sections.Projects] ? "sectionActive" : ""].join(' ')}
                    onClick={() => this.props.goToSection(Sections.Projects)}>Projects
                </a>
                <a id="skills-nav" 
                    className={["navButton", "desktop", this.props.sectionSelected[Sections.Skills] ? "sectionActive" : ""].join(' ')}
                    onClick={() => this.props.goToSection(Sections.Skills)}>Skills
                </a>


                <a className="mobile-nav-menu mobile" onClick={() => this.props.toggleSideNav()}>
                    <i className="fa fa-bars" />
                </a>
                <a className="name mobile" href="/">Timothy T. Chen</a>
                <a className="header-icon mobile" href={Pdf} target="_blank">
                    <i className="fa fa-file-pdf-o" />
                </a>

                <SideNav
                    onClick={(i) => this.props.goToSection(i)}
                    viewSideNav={this.props.viewSideNav}
                    sectionSelected = {this.props.sectionSelected}
                />
            </div>
        )
    }
}
export default Header;
