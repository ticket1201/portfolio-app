import React from 'react';
import s from './Hero.module.scss';
import me from './../../assets/images/me.jpg'

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
                    <img src={me} alt='Me'/>
                </div>
            </div>
        </section>
    );
};

export default Hero;