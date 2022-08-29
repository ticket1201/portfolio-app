import React from 'react';
import s from './Header.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase, faEnvelope, faHouseChimney, faUser} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';
import {Fade} from 'react-awesome-reveal';

const Header = () => {
    const active = {
        color: `black`,
        letterSpacing: `2px`
    }

    let date = new Date()

    return (
        <Fade>
            <header>
                <h2>PORTFOLIO</h2>
                <nav className={s.nav}>
                    <NavLink to={'/home'} className={s.navItem}
                             style={({isActive}) =>
                                 isActive ? active : {}}>
                        <FontAwesomeIcon icon={faHouseChimney}/>
                        Home
                    </NavLink>
                    <NavLink to={'/about'} className={s.navItem}>
                        <FontAwesomeIcon icon={faUser}/>
                        About
                    </NavLink>
                    <NavLink to={'/portfolio'} className={s.navItem}>
                        <FontAwesomeIcon icon={faBriefcase}/>
                        Portfolio
                    </NavLink>
                    <NavLink to={'/contact'} className={s.navItem}>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        Contact
                    </NavLink>
                </nav>
                <p>© {date.getFullYear()}. All Rights Reserved</p>
            </header>
        </Fade>
    );
};

export default Header;