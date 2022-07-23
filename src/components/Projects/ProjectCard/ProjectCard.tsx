import React from 'react';
import s from './../Projects.module.scss'

const ProjectCard = () => {
    return (
        <div className={s.projectCard}>
            <div className={s.imageWrapper}>
                <button className={s.hiddenBtn}>View project</button>
            </div>
            <div className={s.descriptionWrapper}>
                <h3>Project name</h3>
                <p className={s.projectDescription}>Short description</p>
            </div>
        </div>
    );
};

export default ProjectCard;