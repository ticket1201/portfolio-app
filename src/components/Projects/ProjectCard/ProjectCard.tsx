import React from 'react';
import s from './../Projects.module.scss'

type ProjectPropsType = {
    projectImage: string
    projectUrl: string
    projectName: string
    projectDescription: string
}

const ProjectCard = (props: ProjectPropsType) => {

    let backgroundImage = {
        backgroundImage: `url(${props.projectImage})`
    }

    return (
        <div className={s.projectCard}>
            <div className={s.imageWrapper} style={backgroundImage}>
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