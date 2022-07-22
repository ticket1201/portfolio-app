import React from 'react';
import s from './Header.module.scss'

const Header = () => {
    return (
        <header>
            <div className={`wrapper ${s.wrapper}`}>
                <nav className={s.nav}>
                    <a href="" className={s.navItem}>Main</a>
                    <a href="" className={s.navItem}>Skills</a>
                    <a href="" className={s.navItem}>Projects</a>
                    <a href="" className={s.navItem}>Contacts</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;