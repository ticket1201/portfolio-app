import React from 'react';
import s from './Burger.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons';

const Burger = () => {
    return (
        <div className={s.burger}>
            <FontAwesomeIcon icon={faAlignJustify}/>
        </div>
    );
};

export default Burger;