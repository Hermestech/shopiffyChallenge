import React, {useEffect, useState, useReducer} from 'react';
import  PhotoCard  from './PhotoCard';
import { BASE_URL } from '../utils/constants';

import './styles/Photos.css'

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_FAVORITE':
            return{
                ...state,
                favorites:[...state.favorites, action.payload]
            }

        default:
            return state
    }
};


const Photos = () => {
    const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

    
    useEffect(() => {
        fetch(BASE_URL)
        .then(response => response.json())
        .then(data => setCharacters(data.photos))
    }, [setCharacters]);

    const handleClick = favorite => {
        dispatch({type: 'ADD_TO_FAVORITE', payload: favorite})
    }

    return (
        <section className='container'>

            {
              characters && characters.map(character =>
                <PhotoCard handleClick={handleClick} key={character.id} character={character}/>)
            }
            
        
        {favorites.favorites.map(favorite => (
                <li key={favorite.id}>
                    {favorite.camera.name}
                </li>
         ))}
           
            
        </section>
    )
}

export { Photos }