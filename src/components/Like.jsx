import React, {useState}from 'react'
import './styles/Like.css'

const Like = () => {

    const [popUp, setPopUp] = useState(false);

    const animate = () => {
        //animation start
        popUp ? setPopUp(false) : setPopUp(true)
    }

    return (
        <>
        <button onClick={animate} className={popUp ? `animation-heart` : `heart`  }></button>
        </>
    )
}
//"heart"
export default Like;