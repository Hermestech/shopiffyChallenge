import React from 'react'
import Background from './Background'
import PhotoCard from './PhotoCard'

const PhotoList = ({photos}) => {
    return (
        <>
            {
              photos && photos.map(photo =>
                <PhotoCard key={photo.id} photo={photo}/>)
            }
       
        </>
    )
}
 
export default PhotoList
