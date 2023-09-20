import React from 'react'
import './messages.css';

function Messages() {


    const sendEmail = async () => {
        try {
          const response = await axios.post('https://api.sendgrid.com/v3/mail/send', {
            personalizations: [
              {
                to: [{ email: 'destinatario@example.com' }],
                subject: 'Asunto del correo',
              },
            ],
            from: { email: 'remite@example.com' },
            content: [{ type: 'text/plain', value: 'Contenido del correo' }],
          }, {
            headers: {
              'Authorization': 'Bearer YOUR_SENDGRID_API_KEY', // Reemplaza con tu API Key de SendGrid
              'Content-Type': 'application/json',
            },
          });
    
          console.log('Correo electrónico enviado con éxito', response);
        } catch (error) {
          console.error('Error al enviar el correo electrónico', error);
        }
      };


    return (
        <section className="contact" id='contact'>
            <h2 className="heading">Contact <span>Me!</span></h2>
            <form action="#">
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" placeholder="Full Name" required/>
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder="Email Address" required/>
                        <span className="focus"></span>
                    </div>
                </div>

                <div className="input-box">
                    <div className="input-field">
                        <input type="number" placeholder="Mobile Number" required/>
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder="Email Subject" required/>
                        <span className="focus"></span>
                    </div>
                </div>

                <div className="textarea-field">
                    <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' required></textarea>
                    <span className="focus"></span>
                </div>
                
                <div className="btn-box btns">
                <button type='submit' className='btn' onClick={sendEmail}>Submit</button>
                </div>
            </form>
        </section>
        
        
    )
};

export default Messages;