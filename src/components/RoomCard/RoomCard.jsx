import style from './RoomCard.module.scss'

//bruger props til at lave et card
export const RoomCard = ({ imageSrc, title, priceLow, priceHigh }) => {

    return (
        <figure className={style.roomcardWrapper}>
            <img src={imageSrc} alt={title} />
            <h3>{title}</h3>
            <p>Priser mellem {priceLow} DKK og {priceHigh} DKK</p>
            <a href="">Læs Mere</a>
        </figure>
    )
}