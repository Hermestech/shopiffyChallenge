import React from 'react'
import Like from './Like'
import './styles/PhotoCard.css'

const PhotoCard = ({character, handleClick}) => {
    return (
        
        <section className='container'>
            
            <article className='card'>
             <div className='box'>
                <div className='content'>
                <img src={character.img_src} alt="" />
                <h2>{character.camera.name}</h2>                
                <p>Date: {character.earth_date}</p>
                <p>Rover: {character.rover.name}</p>
                <p>Status: {character.rover.status}</p>
                <p>Launch Date: {character.rover.launch_date}</p>
                <div className='button' onClick={() => handleClick(character)}><Like/></div>
                </div>
             </div>
            </article>
        </section>
        
    )
}

export default PhotoCard
