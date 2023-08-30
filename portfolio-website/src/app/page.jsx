import React from 'react'
import AboutMe from './components/About/AboutMe';
import Home from './components/Home/Home';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Messages from './components/Messages/Messages';


function Page() {
    return (
        <div>
            <Home />
            <AboutMe />
            <Education />
            <Skills />
            <Messages />
        </div>


    )
};

export default Page;
