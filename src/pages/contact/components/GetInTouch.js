import React, { useEffect } from 'react'
import { FaEnvelope, FaGlobe, FaMapMarker, FaPhone } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const GetInTouch = () => {
    useEffect(() => {
        AOS.init();
    })
  return (
    <section>
      <div className="top-message" data-aos="zoom-out-up">
        <h1>Simple Direct contacts</h1>
        <p>Explore my portfolio and connect with ease. Find my location for in-person meetups, visit my website for more details, email me directly, or give me a call. I look forward to hearing from you!</p>
     </div>
     <div className="socialmedia-container">
        <div className="links" data-aos="zoom-out">
            <div className="iconimagetag">
             <FaEnvelope className='contacticon'/>
            </div>
            <div className="infomation">
                <p>Email Me</p>
                <p>gtechmb27.infinity@gmail.com</p>
            </div>
            <div className="type">
                <p>Open</p>
            </div>
        </div>
        <div className="links" data-aos="zoom-out">
            <div className="iconimagetag">
             <FaPhone className='contacticon'/>
            </div>
            <div className="infomation">
                <p>Call</p>
                <p>+2547123 23476</p>
            </div>
            <div className="type">
                <p>Open</p>
            </div>
        </div>
        <div className="links" data-aos="zoom-out">
            <div className="iconimagetag">
             <FaMapMarker className='contacticon'/>
            </div>
            <div className="infomation">
                <p>Location</p>
                <p>Nairobi, Kenya.</p>
            </div>
            <div className="type">
                <p style={{color: 'orangered'}}>Closed</p>
            </div>
        </div>
        <div className="links" data-aos="zoom-out">
            <div className="iconimagetag">
             <FaGlobe className='contacticon'/>
            </div>
            <div className="infomation">
                <p>Website</p>
                <p>https://gtechinfinity.com</p>
            </div>
            <div className="type">
                <p>Open</p>
            </div>
        </div>
     </div>
    </section>
  )
}

export default GetInTouch
