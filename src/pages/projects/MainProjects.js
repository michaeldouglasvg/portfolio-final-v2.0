import React, { useEffect } from 'react'
import Undervelopment from './components/Undervelopment'
import LiveProjects from './components/LiveProjects'
import { images } from '../../constants/AssetsFile'
import { ProjectData } from '../../constants/DataFlow'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const MainProjects = () => {
  const app = ProjectData.filter(project => project.category === "App");
  const ml = ProjectData.filter(project => project.category === "ML");
  const website = ProjectData.filter(project => project.category === "Website");
  const ds = ProjectData.filter(project => project.category === "DS");

  useEffect(() => {
    AOS.init();
  })

  return (
    <section className='Services'>
      <div className="projects-head">
        <h1 data-aos="zoom-out-up">Projects({ProjectData&&ProjectData.length})</h1>
        <div className="summary">
            <div className="cardSamamry" data-aos="flip-up">
                <h2>Apps</h2>
                <h2>{app && app.length}</h2>
            </div>
            <div className="cardSamamry" data-aos="flip-up">
                <h2>Web</h2>
                <h2>{website && website.length}</h2>
            </div>
            <div className="cardSamamry" data-aos="flip-up">
                <h2>DS</h2>
                <h2>{ds && ds.length}</h2>
            </div>
            <div className="cardSamamry" data-aos="flip-up">
                <h2>ML</h2>
                <h2>{ml && ml.length}</h2>
            </div>
        </div>
      </div>
      <div className="content-section">
        <Undervelopment />
        <div className="displayavatar">
            <img src={images.cloudeservices} alt="" data-aos="zoom-out-up"/>
        </div>
        <LiveProjects />
      </div>
    </section>
  )
}

export default MainProjects
