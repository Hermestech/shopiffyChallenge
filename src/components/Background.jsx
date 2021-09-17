import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Background.css'

const Background = () => {
    return (
        <>
    <div className="stars"></div>
    <div className="twinkling"></div> 
    <div className="clouds"></div>
    <Link to='home' style={{textDecoration: 'none'}}>
        <div className="title">
            <h1>Click Me, Earthling</h1>
        </div>
    </Link>
 
        </>
    )
}

export default Background
