import React from 'react';
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <footer>
            <div className={`wrapper ${s.wrapper}`}>
                <div className={s.socials}>
                    <a href="https://t.me/followticket">Telegram</a>
                    <a href="mailto:ticket1201@gmail.com">Email</a>
                    <a href="https://www.linkedin.com/in/anton-metlitsky-3568a113a/">LinkedIn</a>
                    <a href="https://www.facebook.com/profile.php?id=100001814025172">Facebook</a>
                </div>
                <h4>© 2022. All Rights Reserved</h4>
            </div>
        </footer>
    );
};

export default Footer;