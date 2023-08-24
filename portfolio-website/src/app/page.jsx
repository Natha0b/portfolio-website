import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';


function Home() {
    return (
        <main>
            <header className="header">
                <a href="#" className="logo">Nathaly.</a>

                <div className="menu-icon"></div>

                <nav className="navbar">
                    <a href="#" className="active">Inicio</a>
                    <a href="#">Sobre Mi</a>
                    <a href="#">Porfolio</a>
                    <a href="#">Educación</a>
                    <a href="#">Skills</a>
                    <a href="#">Contacto</a>

                </nav>

            </header>

            <section className="home">
                <div className="home-content">
                    <h1>Hola! Soy <span>Nathaly Ortiz</span></h1>
                    <div className="text-animate">
                        <h3>Desarrolladora de Software</h3>
                    </div>
                    <p>Soy una apasionada del desarrollo frontend, me entusiasma la creacion de interfaces web cautivadoras y funcionales. Mi objetivo es seguir explorando, mejorando e innovando la web en cada proyecto.</p>

                    <div className="btn-box"><a href="public/Dev_LauraOrtizBarona_CV_SoftwareDeveloper.pdf" className="btn" download>Mi CV</a>
                        
                        <a href="#" className="btn">Let´s Talk</a>
                    </div>
                </div>

                <div className="home-sci">
                    <a href='#'><FaGithub /></a>
                    <a href='#'><FaLinkedin /></a>
                    <a href='#'><FaMailBulk /></a>
                </div>

                <div className="home-imgHover"></div>
            </section>
        </main>
    )
};

export default Home;
