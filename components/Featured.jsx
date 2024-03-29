/* eslint-disable react/jsx-no-undef */
import styles from '../styles/Featured.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'
const Featured = () => {
    const [index, setIndex] = useState(0)
    const images = [
        "/img/featured.png",
        "/img/featured1.png",
        "/img/featured2.png"
    ]

    const handleArrow = (direction) => { // direction as parameter  < left | or | right >
        if (direction === "l") {
            setIndex(index !== 0 ? index - 1 : 2) // decrease until index is 2
        }
        if (direction === "r") {
            setIndex(index !== 2 ? index + 1 : 0) // increase until index is 0
        }
    };

    // Function to automatically scroll every 8 seconds
    const autoScroll = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        // Start the autoScroll function with a 10-second interval
        const intervalId = setInterval(autoScroll, 10000);

        // Cleanup function to clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    });

    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow("l")}>
                <Image src={"/img/arrowl.png"} alt="" layout="fill" objectFit='contain' />
            </div>
            <div className={styles.wrapper} style={{ transform: `translateX(${-100 * index}vw)` }}>

                {images.map((img, i) => (
                    <div className={styles.imgContainer} key={i} >
                        <Image src={img} alt="" layout="fill" objectFit='contain' />
                    </div>
                ))}

            </div>
            <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow("r")}>
                <Image src={"/img/arrowr.png"} alt="" layout="fill" objectFit='contain' />
            </div>
        </div>
    );
};

export default Featured
