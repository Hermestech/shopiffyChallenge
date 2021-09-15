import React from 'react'
import './styles/NavBar.css'

const logo = 'https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg'


const NavBar = () => {
    return (
        <header className="header">
            <img className="header__img" src={logo} alt= 'logo'/>
              
        </header>
    )
}

export default NavBar
