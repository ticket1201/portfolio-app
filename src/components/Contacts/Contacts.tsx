import React from 'react';
import s from './Contacts.module.scss'
import {Slide} from 'react-awesome-reveal';
import ContactForm from './ContactForm/ContactForm';

const Contacts = () => {

    return (
        <section className={s.contacts}>
            <Slide className={s.slide} direction={'right'}>
                <div className={`wrapper ${s.wrapper}`}>
                    <h2>Get in Touch</h2>
                    <div className={s.map}>
                    <iframe title={'map'}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40066.79227752403!2d44.78328024703446!3d41.72090395241167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2sTbilisi%2C%20Georgia!5e0!3m2!1sen!2sby!4v1665327013046!5m2!1sen!2sby"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <ContactForm/>
                </div>
            </Slide>

        </section>


    );
};

export default Contacts;