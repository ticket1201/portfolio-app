import React, {useEffect} from 'react';
import s from './Projects.module.scss'
import ProjectCard from './ProjectCard/ProjectCard';
import todo from './../../assets/images/todolist.png'
import social from './../../assets/images/socialNetwork.png'
import cards from './../../assets/images/cards.jpg'
import pizza from './../../assets/images/pizza.jpg'
import sentosa from './../../assets/images/sentosa.jpg'
import Glide from '@glidejs/glide';


const Projects = () => {

    useEffect(() => {
        setTimeout(() => {
            new Glide('.glide',{
                type: 'carousel',
                perView: 3  ,
                breakpoints: {
                    1500:{
                        perView: 2
                    },
                    992: {
                        perView: 1
                    }
                }
            }).mount()
        }, 10);
    }, []);

    return (
        <article className={s.projects}>
            <div className={`wrapper ${s.projectsWrapper}`}>
                <h2 className={s.projectTitle}>Projects</h2>
                <div className={s.projectItemWrapper}>
                    <div className="glide">
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                                <li className="glide__slide" style={{padding: 10}}>
                                    <ProjectCard projectName={'Sentosa tour'} projectImage={sentosa}
                                                 projectUrl={'https://sentosatour.com/'}
                                                 projectDescription={`Singapore visa center website`}/>
                                </li>
                                <li className="glide__slide" style={{padding: 10}}>
                                    <ProjectCard projectName={'Pizza store'} projectImage={pizza}
                                                 projectUrl={'https://ticket1201.github.io/pizza-store/'}
                                                 projectDescription={`Online ordering the world's tastiest pizza`}/>
                                </li>
                                <li className="glide__slide" style={{padding: 10}}>
                                    <ProjectCard projectName={'Cards Quiz'} projectImage={cards}
                                                 projectUrl={'https://ticket1201.github.io/cards_quiz/'}
                                                 projectDescription={'Cards quiz application to learn new things'}/>
                                </li>
                                <li className="glide__slide" style={{padding: 10}}>
                                    <ProjectCard projectName={'TodoList'}
                                                 projectUrl={'https://ticket1201.github.io/it-incubator-todolist-ts-01/'}
                                                 projectImage={todo}
                                                 projectDescription={'Todolist, simple way to organise everything'}/>
                                </li>
                                <li className="glide__slide" style={{padding: 10}}>
                                    <ProjectCard projectName={'Social Network'} projectImage={social}
                                                 projectUrl={'https://ticket1201.github.io/samurai-way/'}
                                                 projectDescription={'Online platform to connect people'}/>
                                </li>
                            </ul>
                        </div>

                        <div className="glide__arrows" data-glide-el="controls">
                            <button className="glide__arrow glide__arrow--left" data-glide-dir="<" style={{background:'#18191a', border: 0, left: '-2em', textTransform: 'capitalize', zIndex: 1}}>prev</button>
                            <button className="glide__arrow glide__arrow--right" data-glide-dir=">" style={{background:'#18191a', border: 0, right: '-2em', textTransform: 'capitalize', zIndex: 1}}>next</button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Projects;