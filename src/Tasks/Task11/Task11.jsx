import React, { useRef, useEffect, useState } from 'react'
import Anime, { anime } from 'react-animejs-wrapper';
import img1 from "../../Images/11Task/screen-1.jpg"
import img2 from "../../Images/11Task/screen-2.jpg"

const Task11 = (props) => {
    const animatedSquaresRef = useRef(null)
    const play = () => animatedSquaresRef.current.play();
    const [image, setImage] = useState(img1)

    function NextImg() {
        setImage(img2)
    }

    const Start = () => {
        play()
        setInterval(NextImg, "2000")
    }

    return (
        <Anime
            ref={animatedSquaresRef}
            config={{
                translateX: 50,
                duration: 2000,
                easing: 'linear',
                autoplay: false
            }} >
            <img src={image} width="30%" height="30%"
                onClick={Start} className={"Page1"} />
        </Anime>
    )
}

export default Task11