import style from './Footer.module.scss'
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const Footer = () => {

    //retunere footer med info
    return (
        <footer className={style.footer}>
            <ul>
                <li>© 2021 Hotel Overlook. Alle rettigheder forbeholdt.</li>
            </ul>
            <ul>
                <li><a className={style.icon} href="https://www.twitter.com/" target="_blank"><FaTwitterSquare /></a></li>
                <li><a className={style.icon} href="https://www.facebook.com/" target="_blank"><FaFacebook /></a></li>
            </ul>
            <nav className={style.footerNav}>
                <ul>
                    <li>
                        <NavLink to='/'>Forside</NavLink>
                    </li>
                    <li>
                        <NavLink to='/hoteller'>Hoteller & Destinationer</NavLink>
                    </li>
                    <li>
                        <NavLink to='/vaerelser'>Værelser</NavLink>
                    </li>
                    <li>
                        <NavLink to='/reservation'>Resevationer</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login'>Login</NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}
