import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoList from './PhotoList'
import './styles/AnotherPhotos.css'

const AnotherPhotos = () => {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const loadPhotos = async () => {
            try{
                setIsLoading(true);
                const response = await axios.get(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=an0ESP10moVKrfEiv8amDJ1HslO3a6j1KxWHpsb6`
            );

            setPhotos((photos) => [...photos, ...response.data.photos]);
            setErrorMsg('');
            }catch(error){
              setErrorMsg('Error while loading data. Try again later.')
            } finally{
                setIsLoading(false);
            }
        };

        loadPhotos();
    }, [page]);

    const loadMore = () => {
        setPage((page) => page + 1 );
    }

   



    return(
        <section className='container'>
            <PhotoList photos={photos}/>
            {errorMsg && <p className='errorMsg'>{errorMsg}</p>}
            <div className='load-more'>
                <button className='load-button' onClick={loadMore}>
                    {isLoading ? 'Loading...' : 'Load More'}
                </button>
            </div>
        </section>
    )

}

export default AnotherPhotos