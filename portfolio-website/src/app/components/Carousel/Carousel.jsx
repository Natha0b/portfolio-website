'use client';
import React from 'react'
import './carousel.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';

function Carousel() {
    return (
        <section className="carousel">
            <div className="title">
                <h2>Certificados</h2>
                <div className="certicate">
                    <a href='https://drive.google.com/file/d/1ZLwDMKoMsnggqWX9gk2EA9bdAau-U8CT/view?usp=drive_link'>
                        <img src="public/certi1.jpg" alt="Descripción de la imagen"/>
                    </a>
                    <a href='https://www.linkedin.com/in/nathalyortiz/'><FaLinkedin /></a>
                    <a href="#"><FaMailBulk /></a>
                </div>
            </div>
        </section>
    )
};

export default Carousel;