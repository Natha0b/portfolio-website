import React from 'react';
import './skills.css'
import Projects from '../Projects/Projects';

function Skills() {
    return (
        <section className='skills'>
            <h2 className="heading">Mis <span>Proyectos</span></h2>

            <Projects/>

            <div className="skills-row">
                <div className="skills-column">
                    <h3 className="title">Habilidades Técnicas</h3>
                    <div className="skills-box">
                        <div className="skills-content">
                            <div className="progress">
                                <h3>HTML <span>90%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>
                            <div className="progress">
                                <h3>CSS <span>90%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>
                            <div className="progress">
                                <h3>JavaScript <span>90%</span></h3>
                                <div className="bar"><span></span></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </section>
    );
}

export default Skills;