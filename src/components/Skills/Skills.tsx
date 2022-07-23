import React from 'react';
import s from './Skills.module.scss'
import SkillCard from './SkillCard/SkillCard';

const Skills = () => {
    return (
        <section className={s.skills} id={`skills`}>
            <div className={`wrapper ${s.wrapper}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={`wrapper ${s.cardContainer}`}>
                    <SkillCard/>
                    <SkillCard/>
                    <SkillCard/>
                </div>
            </div>
        </section>
    );
};

export default Skills;