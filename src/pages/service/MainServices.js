import React, { useState, useEffect } from 'react'
import { FaEnvelope, FaFacebook, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { Services } from '../../constants/DataFlow';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const MainServices = () => {
  const [showShare, setShareButtons] = useState(false);

  useEffect(() => {
    AOS.init();
  })

  return (
    <section className='Services'>
      <div className="heading"><h1 data-aos="zoom-out-up">My Services</h1></div>
      <div className="content-section">
      {Services && 
        Services.map((service, index) => {
          return <div className="singlecard" key={index} data-aos="zoom-out-up">
          <div className="image">
            <img src={service.logo} alt="" data-aos="zoom-out-down"/>
          </div>
          <div className="content-bottom">
            <div className="heading">
              <h1>{service.type}</h1>
            </div>
            <div className="text">
              <p>{service.content}</p>
            </div>
            <div className="button">
              <button onClick={() => setShareButtons(service.type)} style={{background: showShare !== service.type?"":"orangered"}}>
              {showShare !== service.type ? "Request Service":"Not Interested"}</button>
            </div>
            {showShare === service.type && <div className="sharebuttons">
              <div className="icon"><FaFacebook className='shareicons'/></div>
              <div className="icon"> <FaWhatsapp className='shareicons'/></div>
              <div className="icon"><FaTelegram className='shareicons'/></div>
              <div className="icon"><FaEnvelope className='shareicons'/></div>
            </div>}
          </div>
        </div>
        })}
      </div>
    </section>
  )
}

export default MainServices
