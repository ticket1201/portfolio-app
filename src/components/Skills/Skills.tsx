import React from 'react';
import s from './Skills.module.scss'
import SkillCard from './SkillCard/SkillCard';
import {faCss3Alt, faHtml5, faSquareJs} from '@fortawesome/free-brands-svg-icons';
const Skills = () => {
    return (
        <section className={s.skills} id={`skills`}>
            <div className={`wrapper ${s.wrapper}`}>
                <div className={`wrapper ${s.cardContainer}`}>
                    <SkillCard skillTitle={'HTML'} iconName={faHtml5} iconColor={'#e54c21'}/>
                    <SkillCard skillTitle={'CSS'}  iconName={faCss3Alt} iconColor={'#264de4'}/>
                    <SkillCard skillTitle={'JS'} iconName={faSquareJs} iconColor={'#f7e018'}/>
                </div>
            </div>
        </section>
    );
};

export default Skills;