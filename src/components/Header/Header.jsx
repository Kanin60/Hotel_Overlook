import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch'
import style from './Header.module.scss'

export const Header = () => {
    //Her fetcher jeg billederne til Slideshow og gemmer det i et array. 
    const imageList = useFetch('http://localhost:4000/imagelist');
    const imgArray = imageList?.data
    // console.log('imgArray: ', imgArray);

    //indexet som "styrer" rækkefølgen i imgArray
    const [currentIndex, setCurrentIndex] = useState(0);

    //
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 76);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    // console.log('Tæller:', currentIndex);

    return (
        <header className={style.header}>

            {imgArray &&
                <figure>
                    <img src={imgArray[currentIndex]?.filename} alt={imgArray[currentIndex]?.title} />
                </figure>
            }
        </header>
    )
}
