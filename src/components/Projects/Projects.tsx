import React from 'react';
import s from './Projects.module.scss'
import ProjectCard from './ProjectCard/ProjectCard';
import todo from './../../assets/images/todolist.png'
import social from './../../assets/images/socialNetwork.png'
import cards from './../../assets/images/cards.jpg'
import {Fade} from 'react-awesome-reveal';

const Projects = () => {
    return (
        <article className={s.projects}>
            <div className={`wrapper ${s.projectsWrapper}`}>
                <h2 className={s.projectTitle}>Projects</h2>
                <Fade className={s.fade}>
                    <div className={s.projectItemWrapper}>
                        <ProjectCard projectName={'Cards Quiz'} projectImage={cards}
                                     projectUrl={'https://ticket1201.github.io/cards_quiz/'}
                                     projectDescription={'Cards quiz application to learn new things'}/>

                        <ProjectCard projectName={'TodoList'}
                                     projectUrl={'https://ticket1201.github.io/it-incubator-todolist-ts-01/'}
                                     projectImage={todo}
                                     projectDescription={'Todolist, simple way to organise everything'}/>

                        <ProjectCard projectName={'Social Network'} projectImage={social}
                                     projectUrl={'https://ticket1201.github.io/samurai-way/'}
                                     projectDescription={'Online platform to connect people'}/>
                    </div>
                </Fade>
            </div>
        </article>
    );
};

export default Projects;