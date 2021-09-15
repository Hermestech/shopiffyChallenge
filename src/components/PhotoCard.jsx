import React from 'react'
import Like from './Like'
import './styles/PhotoCard.css'

const PhotoCard = ({photo}) => {
    return (
        
        <section className='container'>
            
            <article className='card'>
             <div className='box'>
                <div className='content'>
                <img src={photo.img_src} alt="" />
                <h2>{photo.camera.name}</h2>                
                <p>Date: {photo.earth_date}</p>
                <p>Rover: {photo.rover.name}</p>
                <p>Status: {photo.rover.status}</p>
                <p>Launch Date: {photo.rover.launch_date}</p>
                <div className='button' ><Like/></div>
                </div>
             </div>
            </article>
        </section>
        
    )
}

export default PhotoCard
