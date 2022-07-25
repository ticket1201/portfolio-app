import React from 'react';
import s from   './Projects.module.scss'
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
    return (
        <article className={s.projects}>
            <div className={`wrapper ${s.projectsWrapper}`} id={`projects`}>
                <h2 className={s.projectTitle}>Projects</h2>
                <div className={s.projectItemWrapper}>
                    <ProjectCard projectName={'TodoList'} projectUrl={''} projectDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>
                    <ProjectCard projectName={'Social Network'} projectUrl={''} projectDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>
                </div>
            </div>
        </article>
    );
};

export default Projects;