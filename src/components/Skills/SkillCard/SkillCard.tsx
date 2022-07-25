import React from 'react';
import s from './../Skills.module.scss'

type SkillCardType = {
    imgUrl: string
    imgAlt: string
    skillTitle: string
    skillDescription: string
}

const SkillCard = (props:SkillCardType) => {
    return (
        <div className={s.skillCard}>
            <img src={props.imgUrl} alt={props.imgAlt}/>
            <h3 className={s.CardTitle}>{props.skillTitle}</h3>
            <p className={s.CardDescription}>{props.skillDescription}</p>
        </div>
    );
};

export default SkillCard;