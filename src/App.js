
import './App.css';
import { useState } from 'react'
import Bg from './Bg'
import Main from './Main'
import Nav from './Nav'
import React from 'react';

const App = () => {

  const[homeDiv, setHomeDiv] = useState(true);
  const[bioDiv, setBioDiv] = useState(false);
  const[projectsDiv, setProjectsDiv] = useState(false);
  const[contactDiv, setContactDiv] = useState(false);
  const[resumeDiv, setResumeDiv] = useState(false);

  return (

    <div className="app">
      <Bg/>
      <Nav
        homeDiv={homeDiv} setHomeDiv={setHomeDiv}
        bioDiv={bioDiv} setBioDiv={setBioDiv}
        projectsDiv={projectsDiv} setProjectsDiv={setProjectsDiv}
        contactDiv={contactDiv} setContactDiv={setContactDiv}
        resumeDiv={resumeDiv} setResumeDiv={setResumeDiv}
      />
      <Main
        homeDiv={homeDiv} setHomeDiv={setHomeDiv}
        bioDiv={bioDiv} setBioDiv={setBioDiv}
        projectsDiv={projectsDiv} setProjectsDiv={setProjectsDiv}
        contactDiv={contactDiv} setContactDiv={setContactDiv}
        resumeDiv={resumeDiv} setResumeDiv={setResumeDiv}
      />
    </div>
  );
}

export default App;
