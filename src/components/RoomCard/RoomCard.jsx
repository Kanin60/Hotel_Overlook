import style from './RoomCard.module.scss'

export const RoomCard = ({ imageSrc, title, priceLow, priceHigh }) => {

    // console.log('ROOMCARD', imageSrc);

    return (
        <figure className={style.roomcardWrapper}>
            <img src={imageSrc} alt={title} />
            <h3>{title}</h3>
            <p>Priser mellem {priceLow} DKK og {priceHigh} DKK</p>
            <a href="">Læs Mere</a>
        </figure>
    )
}