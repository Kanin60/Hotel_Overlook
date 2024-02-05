

import { NavLink } from 'react-router-dom';

export const Nav = () => {

    const activeStyle = ({ isActive, isPending }) => {
        return {
            color: isActive ? '#DF9962' : '',
            textDecoration: isActive ? '' : 'underline'
        }
    }

    return (
        <nav>
            <ul>
                <NavLink to='/' style={activeStyle}>Forside</NavLink>
                <NavLink to='/login' style={activeStyle}>Login</NavLink>
            </ul>
        </nav>
    )
}



