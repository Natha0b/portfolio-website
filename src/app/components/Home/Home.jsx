'use client';
import React, { useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import './home.css';
import AboutMe from '../About/AboutMe';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Messages from '../Messages/Messages';
import Footer from '../Footer/Footer';


function Home() {

    useEffect(() => {
        // Función para desplazamiento suave
        const scrollToSection = (sectionId) => {
          const section = document.getElementById(sectionId);
          if (section) {
            window.scrollTo({
              top: section.offsetTop,
              behavior: 'smooth',
            });
          }
        };
    
        // Manejar el clic en los enlaces del menú
        const handleMenuClick = (event, sectionId) => {
          event.preventDefault();
          scrollToSection(sectionId);
        };
    
        // Agregar controladores de clic a los enlaces del menú
        const links = document.querySelectorAll('.navbar a');
        links.forEach((link) => {
          const sectionId = link.getAttribute('href').substring(1);
          link.addEventListener('click', (event) => handleMenuClick(event, sectionId));
        });
      }, []);


    return (
        <main>
            <header className="header">
                <a href="#" className="logo">Nathaly.</a>

                <div className="menu-icon"></div>

                <nav className="navbar">

                        <a href="#home">Inicio</a>
                        <a href="#about">Sobre Mí</a>
                        <a href="#education">Educación</a>
                        <a href="#skills">Skills</a>
                        <a href="#contact">Contacto</a>

                </nav>

            </header>

            <section className="home" id='home'>
                <div className="home-content">
                    <h1>Hola! Soy <span>Laura Nathaly</span></h1>
                    <div className="text-animate">
                        <h3>Desarrolladora de Software</h3>
                    </div>
                    <p>Soy una apasionada del desarrollo frontend, me entusiasma la creacion de interfaces
                        web cautivadoras y funcionales. Mi objetivo es seguir explorando, mejorando e innovando
                        la web en cada proyecto.
                    </p>

                    <div className="btn-box">
                        <a href="./CV.pdf" className="btn" download>Descarga mi CV</a>
                    </div>
                </div>

                <div className="home-sci">
                    <a href='https://github.com/Natha0b'><FaGithub /></a>
                    <a href='https://www.linkedin.com/in/nathalyortiz/'><FaLinkedin /></a>
                    <a href="#contact"><FaMailBulk /></a>
                </div>

                <div className="home-imgHover"></div>

            </section>

            <AboutMe />
            <Education />
            <Skills />
            <Messages />
            <Footer />

        </main >
    )
};

export default Home;