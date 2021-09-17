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
                <h4>{photo.rover.name}</h4>
                <p>{photo.rover.status}</p>
                <h4>{photo.earth_date}</h4>
                <p>Launch Date: {photo.rover.launch_date}</p>
                <div className='button' ><Like/></div>
                </div>
             </div>
            </article>
        </section>
        
    )
}

export default PhotoCard
