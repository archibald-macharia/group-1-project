import React from 'react';
import './Contact.css'

function Contact() {
    return (
        <div className='contact-page'>
            <h1 id='contact-header'>Contact Us</h1>
            <p>Have any inquiries, suggestions, concerns, or feedback?</p>
            <p>We'd love to hear from you.</p>
            <div className='contacts'>
                <h4>Emails</h4>
                <p>Abigail Otieno : abigailotieno@gmail.com</p>
                <p>Peris Kingori :periskingori@gmail.com</p>
                <p>Archibald Gacheru : archibaldgacheru@gmail.com</p>
                <p>Newton Bundi : newtonBundi@gmail.com</p>
            </div>
            <p className='contact-paragraph'>We appreciate any message you have for us!</p>
        </div>
    );
}

export default Contact;
