import React from 'react';
import s from './Skills.module.scss'
import SkillCard from './SkillCard/SkillCard';
import {faCss3Alt, faHtml5, faSquareJs} from '@fortawesome/free-brands-svg-icons';
const Skills = () => {
    return (
        <section className={s.skills} id={`skills`}>
            <div className={`wrapper ${s.wrapper}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={`wrapper ${s.cardContainer}`}>
                    <SkillCard skillTitle={'HTML'} skillDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} iconName={faHtml5} iconColor={'#e54c21'}/>
                    <SkillCard skillTitle={'CSS'} skillDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} iconName={faCss3Alt} iconColor={'#264de4'}/>
                    <SkillCard skillTitle={'JS'} skillDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} iconName={faSquareJs} iconColor={'#f7e018'}/>
                </div>
            </div>
        </section>
    );
};

export default Skills;