import React from 'react';
import s from './../Skills.module.scss'

const SkillCard = () => {
    return (
        <div className={s.skillCard}>
            <img src="" alt=""/>
            <h3 className={s.CardTitle}>Skill Title</h3>
            <p className={s.CardDescription}>Detailed description of the skill</p>
        </div>
    );
};

export default SkillCard;