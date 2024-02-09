import style from './NewsCard.module.scss'
import { Link } from 'react-router-dom'

export const NewsCard = ({ imageSrc, title, teaser }) => {
    // console.log(imageSrc);
    //bruger props til at lave et card
    return (
        <div className={style.newsCard}>
            <img src={imageSrc} alt={title} />
            <h2>{title}</h2>
            <p>{teaser}</p>
            <Link>Læs mere</Link>
        </div>
    )
}