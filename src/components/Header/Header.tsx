import React from 'react';
import s from './Header.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    return (
        <header>
            <div className={`wrapper ${s.wrapper}`}>
                <nav className={s.nav}>
                    <a href={'#main'} className={s.navItem}>Main</a>
                    <a href={'#skills'} className={s.navItem}>Skills</a>
                    <a href={'#projects'} className={s.navItem}>Projects</a>
                    <a href={'#contacts'} className={s.navItem}>Contacts</a>
                </nav>
                <div className={s.burger}>
                    <FontAwesomeIcon icon={faAlignJustify}/>
                </div>
            </div>
        </header>
    );
};

export default Header;