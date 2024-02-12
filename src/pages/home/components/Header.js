import React from 'react'
import { images } from "../../../constants/AssetsFile"
import { FaBlog, FaChevronDown, FaCode, FaCog, FaHome, FaMoon, FaPhone, FaProjectDiagram, FaSun } from "react-icons/fa";
import { useTheme } from '../../../context/theme/ThemeSection';

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  console.log(darkMode)

  return (
    <header>
      <div className="logo" id="privacy">
        <img src={images.sitelogo} alt=""/>
      </div>
      <div className="left">
        <div className="navigation">
          <ul>
            <li> <FaHome className="icon" color='blue'/><p>Home</p></li>
            <li> <FaCode className="icon" color="orange" /><p>Services</p></li>
            <li> <FaProjectDiagram className="icon" color='skyblue'/><p>Projects</p></li>
            <li> <FaPhone className="icon" color='green' /><p>Contact</p></li>
            <li> <FaBlog className="icon" color='purple'/><p>Blog</p></li>
            <li className='CloseLinks'> <FaChevronDown className="icon" color='purple'/></li>
          </ul>
        </div>
        <div className="cutomizepen">
          <div className="setting theme">
          {darkMode ? <FaSun className='customizeicons' onClick={toggleDarkMode}/>: <FaMoon className='customizeicons' onClick={toggleDarkMode}/>}
          </div>
          <div className="setting"><FaCog className='customizeicons'/></div>
        </div>
      </div>
    </header>
  )
}

export default Header
