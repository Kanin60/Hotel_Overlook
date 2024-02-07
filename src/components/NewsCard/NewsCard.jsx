import style from './NewsCard.module.scss'

export const NewsCard = ({ imageSrc, title, teaser }) => {
    console.log(imageSrc);
    return (
        <div className={style.newsCard}>
            <img src={imageSrc} alt={title} />
            <h2>{title}</h2>
            <p>{teaser}</p>
        </div>
    )
}