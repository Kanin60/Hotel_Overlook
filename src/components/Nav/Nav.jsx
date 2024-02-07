import Logo from '../../assets/logo.svg'
import style from './Nav.module.scss'

import { NavLink } from 'react-router-dom';

export const Nav = () => {

    const activeStyle = ({ isActive, isPending }) => {
        return {
            color: isActive ? '#FF0000' : '',
        }
    }

    return (
        <nav className={style.nav}>
            <img src={Logo} alt="" />
            <ul>
                <li>
                    <NavLink to='/' style={activeStyle}>Forside</NavLink>
                </li>
                <li>
                    <NavLink to='/hoteller' style={activeStyle}>Hoteller & Destinationer</NavLink>
                </li>
                <li>
                    <NavLink to='/vaerelser' style={activeStyle}>Værelser</NavLink>
                </li>
                <li>
                    <NavLink to='/reservation' style={activeStyle}>Resevationer</NavLink>
                </li>
                <li>
                    <NavLink to='/login' style={activeStyle}>Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}



