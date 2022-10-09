import React from 'react';
import s from './About.module.scss'
import img from './../../assets/images/IMG_2597.jpg'
import {Fade, Slide} from 'react-awesome-reveal';
import Skills from '../Skills/Skills';
import Popup from 'reactjs-popup';


const About = () => {
    let date = new Date()


    const overlayStyle = {
        backgroundColor: `rgba(0, 0, 0, 0.6)`
    }

    return (
        <section className={s.About}>
            <Slide direction={'right'}>
                <div className={`wrapper ${s.wrapper}`}>
                    <div className={s.img}>
                        <img src={img} alt="me"/>
                    </div>
                    <h3>
                        Anton Metlitsky. Frontend developer
                    </h3>
                    <div className={s.textWrapper}>
                        <div className={s.descriptionText}>
                            <p>
                                Hello, I am a creative Frontend developer, more information below. Just click the button to check my skills and tech stack.
                            </p>
                            <Popup trigger={<button>Read more</button>} modal position={'center center'}
                                   overlayStyle={overlayStyle} className={'popup'}>
                                <Fade className={s.fade} duration={100} delay={0}>
                                    <Skills/>
                                </Fade>
                            </Popup>
                        </div>
                        <div className={s.aboutTextWrapper}>
                            <p className={s.aboutText}>
                                <span className={s.aboutTextTitle}>Age:</span>
                                <span>{date.getFullYear() - 1995}</span>
                            </p>
                            <p className={s.aboutText}>
                                <span className={s.aboutTextTitle}>Address:</span>
                                <span>Tbilisi, Georgia</span>
                            </p>
                            <p className={s.aboutText}>
                                <span className={s.aboutTextTitle}>Email:</span>
                                <span>ticket1201@gmail.com</span>
                            </p>
                            <p className={s.aboutText}>
                                <span className={s.aboutTextTitle}>Phone:</span>
                                <span>+995 (591) 51 07 74</span>
                            </p>
                            <p className={s.aboutText}>
                                <span className={s.aboutTextTitle}>Freelance:</span>
                                <span>Available</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Slide>
        </section>
    );
};

export default About;