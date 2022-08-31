import React from 'react';
import s from './Hero.module.scss';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faGithub, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons';
import {Fade} from 'react-awesome-reveal';

const Hero = () => {
    return (
        <Fade className={s.fade}>
            <section className={s.hero}>
                <div className={`wrapper ${s.wrapper}`}>
                    <div className={s.imageWrapper}>
                        <div className={s.img}></div>
                    </div>
                    <div className={s.textWrapper}>
                        <h1>Anton Metlitsky</h1>
                        <p>Creative Frontend developer living in Minsk and happy to make your pages look awesome.</p>
                        <div className={s.iconsWrapper}>
                            <a href="https://github.com/ticket1201" target={'_blank'}>
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                            <a href="https://www.linkedin.com/in/anton-metlitsky-3568a113a" target={'_blank'}
                               rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100001814025172" target={'_blank'}
                               rel="noreferrer">
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </a>
                            <a href="https://t.me/followticket" target={'_blank'} rel="noreferrer">
                                <FontAwesomeIcon icon={faTelegram}/>
                            </a>
                            <a href="mailto:ticket1201@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    );
};

export default Hero;