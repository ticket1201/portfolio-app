import React, {useEffect, useState} from 'react';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const ToTop = () => {

    const [style, setStyle] = useState('hidden')

    const toTop = () => {
        document.documentElement.scrollTop = 0;
    }

    useEffect(() => {
        const select = document.querySelector('#main');
        const objOptions = {
            threshold: 0.8
        }

        const sectionObserver = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setStyle('hidden')
                } else {
                    setStyle('toTop')
                }
            }, objOptions);


        select && sectionObserver.observe(select);
    }, [])


    return (
        <div className={style} onClick={toTop}>
            <FontAwesomeIcon icon={faAngleUp}/>
        </div>
    );
};

export default ToTop;