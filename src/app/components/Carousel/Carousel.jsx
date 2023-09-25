'use client';
import React from 'react'
import './carousel.css';
import image from '../../../../public/images/certi1.jpg';
import image2 from './Holbieawars.jpeg'


function Carousel() {


    return (
        <section className="carousel">
            <div className="title">
                <h2>Certificados</h2>
                <div className="certicate">
                    <img src={image} />
                    <img src={image2} />

                </div>
            </div>
        </section>
    )
};

export default Carousel;