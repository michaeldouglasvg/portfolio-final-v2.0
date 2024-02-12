import React, { useEffect } from 'react'
import { ProjectData } from '../../../constants/DataFlow'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const LiveProjects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  useEffect(() => {
    AOS.init();
  })
  return (
    <div style={{ width: '100%', minHeight: 350}} >
      <Slider {...settings}>
      {ProjectData && 
        ProjectData.map((project, index) => {
          if(project.isComplited === true) {
            return <div className='Projetsshowcase' key={index} data-aos="fade-down">
                  <div className="summary-section">
                    <div className="data"><p>Category:</p> <p>{project.category}</p></div>
                    <div className="data"><p>Name:</p> <p>{project.proName}</p></div>
                    <div className="data"><button><a href={project.proLink} target="_blank" rel="noopener noreferrer">Open Project</a></button></div>
                  </div>
                  <div className="projectdisplay">
                    <img src={project.proImage} alt="" srcset="" width={100}/>
                  </div>
                </div>
          }else{
            return false;
          }
        })}
      </Slider>

    </div>
  )
}

export default LiveProjects
