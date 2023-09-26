'use client';
import React from 'react'
import AboutMe from './components/About/AboutMe';
import Home from './components/Home/Home';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Messages from './components/Messages/Messages';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';



function Page() {
    return (
        <BrowserRouter basename="/react-portfolio-website" >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre-mi" element={<AboutMe />} />
                <Route path="/educacion" element={<Education />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contacto" element={<Messages />} />
            </Routes>
        </BrowserRouter>

    )
};

export default Page;
