import React, { useEffect, useState } from 'react';
import Img1 from "../../assets/apple.webp";
import Img2 from "../../assets/banana.avif";
import Img3 from "../../assets/mango.jpg";
import Img4 from "../../assets/watermelon.jpg";
import Img5 from "../../assets/amrood.webp";

const Slider = () => {
    const [count, setCount] = useState(0);
    const [sliderImages, setSliderImages] = useState([
        Img1,
        Img2,
        Img3,
        Img4,
        Img5
    ]);

    useEffect(() => {
        setTimeout(() => {
            console.log(count);
            setCount(count + 1);
            if (count == sliderImages.length - 1) setCount(0);
        }, 1000);
    }, [count]);

    return (
        <div>
            <img
                src={sliderImages[count]}
                alt="Slider Image"
                height={'500'}
                width={'60%'}
                style={{ margin: '5px' }}
            />
        </div>
    );
};

export default Slider;