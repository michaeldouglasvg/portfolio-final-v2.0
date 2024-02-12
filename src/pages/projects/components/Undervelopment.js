import React, { useEffect } from 'react'
import { ProjectData } from '../../../constants/DataFlow';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Undervelopment = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <div style={{ width: '100%', minHeight: 350}}>
      {ProjectData && 
        ProjectData.map((project, index) => {
          if (project.isComplited === false) {
            return  <div className='Projetsshowcase' key={index} data-aos="fade-down">
          <div className="summary-section">
            <div className="date"><p>Start:</p> <p>{project.start}</p></div>
            <div className="date"><p>End:</p><p>{project.end}</p></div>
            <div className="date"><p>Category:</p> <p>{project.category}</p></div>
            <div className="date"><p>Name:</p> <p>{project.proName}</p></div>
          </div>
          <div className="projectdisplay">
            <img src={project.proImage} alt="" srcset="" width={100}/>
          </div>
        </div>
          }else {
            return false;
          }
      })}
    </div>
  )
}

export default Undervelopment
