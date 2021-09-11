import React, {useEffect, useState} from 'react';
import  PhotoCard  from './PhotoCard';
import { BASE_URL } from '../utils/constants';

import './styles/Photos.css'


const Photos = () => {

    
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(BASE_URL)
        .then(response => response.json())
        .then(data => setCharacters(data.photos))
    }, [setCharacters]);

    
    return (
        <section className='container'>
            <h1>componente</h1>

            {
              characters && characters.map(character =>
                <PhotoCard key={character.id} character={character}/>)
            }
            
        </section>
    )
}

export { Photos }