import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const MainFooter = () => {
  return (
    <div className='Footermain'>
      <div className="images">
        <div className="wave" id="wave-1"></div>
        <div className="wave" id="wave-2"></div>
        <div className="wave" id="wave-3"></div>
        <div className="wave" id="wave-4"></div>
      </div>
      <div className="footer-content">
        <div className="icons-section">
            <FaFacebook className='Footericons'/>
            <FaTwitter className='Footericons'/>
            <FaGithub className='Footericons'/>
            <FaInstagram className='Footericons'/>
            <FaWhatsapp className='Footericons'/>
            <FaTelegram className='Footericons'/>
        </div>
        <div className="links">
            <p>Home</p>
            <p>Services</p>
            <p>Projects</p>
            <p>Contacts</p>
            <p>Blocks</p>
        </div>
        <div className="copyright">
            <p>Copyright&copy;2023Gtechmb.com || All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default MainFooter
