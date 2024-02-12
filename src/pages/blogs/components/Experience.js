import React, { useState, useEffect } from 'react'
import { FaCloudflare, FaSearch } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Experience = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    AOS.init();
})

  return (
    <div className='grid' data-aos="zoom-in">
     <div className="heading-blog">
        <h3>Experience</h3>
        <div className="search">
            <FaSearch className='searchicon'/>
            <input type="search" name="search" placeholder='Eg: Company, technologies...' id="" onChange={() => setData()}/>
        </div>
     </div>
     <div className="endpoint-services">
     {data && data.length === 0 ? <div className="alert-section">
      <div className="alert-content">
        <FaCloudflare className='errorIcon'/>
        <p>Content Unavailable for now, site under maintainance!!!</p>
      </div>
     </div>: <p>Not Found!!!</p>}
     </div>
    </div>
  )
}

export default Experience
