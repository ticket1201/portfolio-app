import React from 'react';
import s from './Hero.module.scss';

const Hero = () => {
    return (
        <section>
            <div className={`wrapper ${s.wrapper}`}>
                <div className={s.textWrapper}>
                    <h2 className={s.sectionTitle}>Hey!</h2>
                    <h2 className={s.sectionTitle}>I'm Anthony Metlitsky.</h2>
                    <h2 className={s.sectionTitle}>Front-end Developer.</h2>
                </div>
                <div className={s.imageWrapper}>
                    <img src="" alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Hero;