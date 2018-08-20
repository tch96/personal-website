import React from 'react';
import './sideNav.css';
import { Sections } from '../../App';

function SideNav(props) {
  return (
    <nav className={["sideNav", props.viewSideNav ? "slideIn" : "slideOut"].join(' ')}>
      <ul>
        <li onClick={() => props.onClick(Sections.Me)}
          className={["navButton", props.sectionSelected[Sections.Me] ? "sectionActive" : ""].join(' ')}
        >
          <a >Me</a>
        </li>
        <li onClick={() => props.onClick(Sections.Work)}
          className={["navButton", props.sectionSelected[Sections.Work] ? "sectionActive" : ""].join(' ')}>
          <a>Work</a>
        </li>
        <li onClick={() => props.onClick(Sections.Projects)}
          className={["navButton", props.sectionSelected[Sections.Projects] ? "sectionActive" : ""].join(' ')}>
          <a>Projects</a>
        </li>
        <li onClick={() => props.onClick(Sections.Skills)}
          className={["navButton", props.sectionSelected[Sections.Skills] ? "sectionActive" : ""].join(' ')}>
          <a>Skills</a>
        </li>
      </ul>
    </nav>
  )
}

export default SideNav;
