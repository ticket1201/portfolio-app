import React from 'react';
import s from './../Projects.module.scss'

type ProjectPropsType = {
    projectUrl:string
    projectName:string
    projectDescription:string
}

const ProjectCard = (props: ProjectPropsType) => {

    return (
        <div className={s.projectCard}>
            <div className={s.imageWrapper}>
                <button className={s.hiddenBtn}>View project</button>
            </div>
            <div className={s.descriptionWrapper}>
                <h3>{props.projectName}</h3>
                <p className={s.projectDescription}>{props.projectDescription}</p>
            </div>
        </div>
    );
};

export default ProjectCard;