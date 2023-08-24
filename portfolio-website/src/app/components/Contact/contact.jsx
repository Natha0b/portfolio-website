'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
    const [emailData, setEmailData] = useState({
        toEmail: '',  // El correo al que se enviará el mensaje
        message: ''   // El contenido del mensaje
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setEmailData({ ...emailData, [name]: value });
    };

    const sendEmail = e => {
        e.preventDefault();

        const templateParams = {
            to_email: emailData.toEmail,
            message: emailData.message
        };

        emailjs.send('service_id', 'template_id', templateParams, 'user_id')
            .then(response => {
                console.log('Correo enviado con éxito', response);
            })
            .catch(error => {
                console.error('Error al enviar el correo', error);
            });
    };

    return (
        <div>
            <h1>Enviar Correo Electrónico</h1>
            <form onSubmit={sendEmail}>
                <label>Destinatario:</label>
                <input
                    type="email"
                    name="toEmail"
                    value={emailData.toEmail}
                    onChange={handleInputChange}
                />
                <label>Mensaje:</label>
                <textarea
                    name="message"
                    value={emailData.message}
                    onChange={handleInputChange}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default EmailForm;