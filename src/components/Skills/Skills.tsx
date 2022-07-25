import React from 'react';
import s from './Skills.module.scss'
import SkillCard from './SkillCard/SkillCard';

const Skills = () => {
    return (
        <section className={s.skills} id={`skills`}>
            <div className={`wrapper ${s.wrapper}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={`wrapper ${s.cardContainer}`}>
                    <SkillCard skillTitle={'HTML'} skillDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} imgUrl={''} imgAlt={'HTML image'}/>
                    <SkillCard skillTitle={'CSS'} skillDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} imgUrl={''} imgAlt={'CSS image'}/>
                    <SkillCard skillTitle={'JS'} skillDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} imgUrl={''} imgAlt={'JS image'}/>
                </div>
            </div>
        </section>
    );
};

export default Skills;