import React from 'react';
import s from './Contacts.module.scss'

const Contacts = () => {
    return (
        <section className={s.contacts}>
            <div className={`wrapper ${s.wrapper}`} id={`contacts`}>
                <h2>Contacts</h2>
                <form action="" className={s.form}>
                    <input type="text" placeholder={`Name`} autoComplete={`on`} name="name"/>
                    <input type="email" placeholder={`Email address`} autoComplete={`on`}/>
                    <textarea name="" id="" placeholder={'Message'}>
                    </textarea>
                </form>
                <button className={`button`}>Send</button>
            </div>
        </section>
    );
};

export default Contacts;