import React from "react";
import GeneralInfo from './general.jsx';
import Educational from './educational.jsx';
import Practical from './practical.jsx';
import Skills from './skills.jsx';
import './resumeStyle.css';
function Resume(){
  return(
  <>

  <div className = 'resumeContainer'>
  <GeneralInfo />
  <hr/>
  <Educational />
  <hr/>
  <Practical />
  <hr/>
  <Skills />
  </div>

  </>
  );
}
export default Resume;