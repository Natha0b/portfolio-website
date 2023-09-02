import React from 'react';
import './aboutme.css'

function AboutMe() {
    return (
        <section className='about'>
            <h2 className="heading">Sobre <span>Mi</span></h2>

            <div className="about-img">
                <img src='https://avatars.githubusercontent.com/u/112909840?v=4' alt="Profile_Photo" />
                <span className="circle-spin"></span>
            </div>

            <div className="about-content">
                <h3>Desarrolladora de Software!</h3>
                <p>
                    Desarrollador de Software con habilidades técnicas en el mundo del desarrollo tecnológico.
                    Conocimiento de lenguajes de programación JavaScript, Python y Git, capacidad para crear sitios web
                    atractivos y funcionales utilizando tecnologías como HTML, CSS y JavaScript. Al igual que el uso frameworks
                    como React.js para desarrollar aplicaciones web más complejas y manejo de bases de datos relacionales como MySQL.
                    Como desarrollador de software, estoy constantemente actualizando mis conocimientos y aprendiendo nuevas
                    tecnologías. Puedo adaptarme rápidamente a los cambios y utilizar las herramientas más adecuadas para cada
                    proyecto. Con estas habilidades y conocimientos, puedo contribuir al desarrollo y mejora de plataformas
                    tecnológicas utilizadas en diferentes empresas, optimizar procesos y mejorar la experiencia del cliente.
                    Estoy comprometida con los estándares de calidad, la eficiencia y el cumplimiento de objetivos.
                </p>
            </div>
        </section>
    );
}

export default AboutMe;


