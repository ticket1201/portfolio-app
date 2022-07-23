import React from 'react';
import s from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={s.hero}>
            <div className={`wrapper ${s.wrapper}`} id={'main'}>
                <div className={s.textWrapper}>
                    <h1 className={s.sectionTitle}>
                        <span className={s.titleItalic}>Hey!</span>
                        <span>I'm Anthony Metlitsky</span>
                        <span>Front-end Developer</span>
                    </h1>
                </div>
                <div className={s.imageWrapper}>
                    <img src="" alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Hero;