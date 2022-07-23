import React from 'react';
import s from './Header.module.scss'

const Header = () => {
    return (
        <header>
            <div className={`wrapper ${s.wrapper}`}>
                <nav className={s.nav}>
                    <a href={"#main"} className={s.navItem}>Main</a>
                    <a href={'#skills'} className={s.navItem}>Skills</a>
                    <a href={'#projects'} className={s.navItem}>Projects</a>
                    <a href={'#contacts'} className={s.navItem}>Contacts</a>
                </nav>
                <div className={s.burger}>
                    icon
                </div>
            </div>
        </header>
    );
};

export default Header;