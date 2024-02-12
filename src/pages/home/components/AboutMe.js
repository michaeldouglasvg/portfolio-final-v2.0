import React, { useEffect } from 'react'
import { ExperienceData } from '../../../constants/DataFlow';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const AboutMe = () => {
    useEffect(() => {
        AOS.init();
    })
  return (
    <section className='aboutmecontent'>
        <h1 data-aos="zoom-out-up">Company worked with</h1>
        <div className="companies">
        {ExperienceData && 
            ExperienceData.map((singlecard, index) => {
                return <div className="singlecaompany" key={index} data-aos="zoom-out-up">
                <div className="logo"><img src={singlecard.compLogo} alt="" srcset="" /></div>
                <div className="main">
                    <div className="tallying">
                        <p className="date">Name: <span>{singlecard.company}</span></p>
                        <p className="date">Ovaral: <span>{singlecard.duration}.</span></p>
                        <div className="stacks">Stacks: {singlecard.technologies}</div>
                    </div>
                    <div className="remarks"><p>{singlecard.company==="Huawei"?"Program":"Role"}: {singlecard.role}</p></div>
                </div>
            </div>
            })}
        </div>
    </section>
  )
}

export default AboutMe
