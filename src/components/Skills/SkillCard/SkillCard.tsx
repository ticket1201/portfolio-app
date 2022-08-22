import React from 'react';
import s from './../Skills.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

type SkillCardPropsType = {
    iconName: IconProp
    iconColor: string
    skillTitle: string
    skillDescription: string
}


const SkillCard = (props:SkillCardPropsType) => {
    return (
        <div className={s.skillCard}>
            <FontAwesomeIcon icon={props.iconName} color={props.iconColor}/>
            <h3 className={s.CardTitle}>{props.skillTitle}</h3>
            <p className={s.CardDescription}>{props.skillDescription}</p>
        </div>
    );
};

export default SkillCard;