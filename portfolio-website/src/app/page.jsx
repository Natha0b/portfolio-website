import React from 'react'
import AboutMe from './components/About/AboutMe';
import Home from './components/Home/Home';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Messages from './components/Messages/Messages';
import Footer from './components/Footer/Footer';


function Page() {
    return (
        <div>
            <Home />
            <AboutMe />
            <Education />
            <Skills />
            <Messages />
            <Footer />
        </div>
    )
};

export default Page;
