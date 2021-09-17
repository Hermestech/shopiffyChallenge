import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Background.css'
const Error404 = () => {
    return (
        <>
            <div className="stars"></div>
            <div className="twinkling"></div> 
            <div className="clouds"></div>
            <Link to='home' style={{textDecoration: 'none'}}>
                <div className="title">
                    <h1>Error 404, click to back home</h1>
                </div>
            </Link>
        </>
    )
}

export default Error404
