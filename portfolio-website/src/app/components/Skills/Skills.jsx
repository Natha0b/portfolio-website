import React from 'react';
import './skills.css'

function Skills() {
    return (
        <section className='skills'>
            <h2 className="heading">Mis <span>Habilidades Técnicas</span></h2>

            <div className="skills-row">
                <div className="skills-column">
                    <h3 className="title">Coding Skills</h3>
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

            <div className="skills-column">
                    <h3 className="title">Profesional Skills</h3>
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
        </section>
    );
}

export default Skills;