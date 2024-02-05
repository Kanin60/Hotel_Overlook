import style from './Header.module.scss'
import Hero from '../../assets/react.svg'

export const Header = () => {

    return (
        <header className={style.header}>
            <img src={Hero} alt='Hero' />
            <h2>Her er headeroverskrift</h2>
        </header>
    )
}
