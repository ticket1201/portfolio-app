import React from 'react';
import s from './Header.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase, faEnvelope, faHouseChimney, faUser} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';
import {Fade} from 'react-awesome-reveal';

type HeaderPropsType = {
    isClosed: boolean
    callback: (isOpen: boolean) => void
}

const Header = ({isClosed, callback}: HeaderPropsType) => {
    const active = {
        color: `black`,
        letterSpacing: `2px`
    }

    let date = new Date()


    let styleFade = isClosed && window.innerWidth < 1200 ? s.hidden : '';

    return (
        <Fade className={`${s.fade} ${styleFade}`}>
            <div className={`${s.click}`} onClick={() => callback(true)}>
                <header>
                    <h2>PORTFOLIO</h2>
                    <nav className={s.nav}>
                        <NavLink onClick={() => callback(true)} to={'/home'} className={s.navItem}
                                 style={({isActive}) =>
                                     isActive ? active : {}}>
                            <FontAwesomeIcon icon={faHouseChimney}/>
                            Home
                        </NavLink>
                        <NavLink onClick={() => callback(true)} to={'/about'} className={s.navItem}>
                            <FontAwesomeIcon icon={faUser}/>
                            About
                        </NavLink>
                        <NavLink onClick={() => callback(true)} to={'/portfolio'} className={s.navItem}>
                            <FontAwesomeIcon icon={faBriefcase}/>
                            Portfolio
                        </NavLink>
                        <NavLink onClick={() => callback(true)} to={'/contact'} className={s.navItem}>
                            <FontAwesomeIcon icon={faEnvelope}/>
                            Contact
                        </NavLink>
                    </nav>
                    <p>© {date.getFullYear()}. All Rights Reserved</p>
                </header>
            </div>
        </Fade>
    );
};

export default Header;