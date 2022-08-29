import React from 'react';
import s from './Contacts.module.scss'
import {Slide} from 'react-awesome-reveal';

const Contacts = () => {
    return (
        <section className={s.contacts}>
            <Slide className={s.slide} direction={'right'}>
                <div className={`wrapper ${s.wrapper}`}>
                    <h2>Get in Touch</h2>
                    <div className={s.map}>
                        <iframe title={'map'}
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18805.233303468147!2d27.552282008825024!3d53.90235060016511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sby!4v1661726952507!5m2!1sen!2sby"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <form action="" className={s.form}>
                        <input type="text" placeholder={`Name`} autoComplete={`on`} name="name"/>
                        <input type="email" placeholder={`Email address`} autoComplete={`on`}/>
                        <textarea name="" id="" placeholder={'Message'}>
                    </textarea>
                    </form>
                    <button className={`button`}>Send Message</button>
                </div>
            </Slide>
        </section>


    );
};

export default Contacts;