import React, { useEffect } from 'react'
import { FaComment, FaHeart, FaSearch, FaShare } from 'react-icons/fa'
import { images } from '../../../constants/AssetsFile'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Treding = () => {
    useEffect(() => {
        AOS.init();
    })
  return (
    <div className='grid' data-aos="zoom-in">
     <div className="heading-blog">
        <h3>Trending</h3>
        <div className="search">
            <FaSearch className='searchicon'/>
            <input type="search" name="search" placeholder='Eg: Today...' id="" />
        </div>
     </div>
     <div className="trending-cards">
        <div className="single-trend">
            <div className="leftimage">
                <img src={images.portraitone} alt="" />
            </div>
            <div className="content-right">
                <div className="top">
                    <p>From Web</p>
                    <p>Thur, Noon</p>
                    <p>21, Jun, 2023</p>
                </div>
                <div className="text">
                    <p>AI is the compass guiding modern innovation, revolutionizing industries with its transformative capabilities. Embrace the future, powered by intelligence.</p>
                </div>
                <div className="thumbs">
                    <div className="actual">
                        <FaHeart className='thumicon'/>
                        <p>1K</p>
                    </div>
                    <div className="actual">
                        <FaShare className='thumicon'/>
                        <p>1.4K</p>
                    </div>
                    <div className="actual">
                        <FaComment className='thumicon'/>
                        <p>1.2K</p>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Treding
