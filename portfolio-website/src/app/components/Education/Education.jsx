import React from 'react';
import './education.css'
import { FaCalendarAlt } from 'react-icons/fa'

function Education() {
    return (
        <section className='education'>
            <h2 className='heading'>Mi <span>Trayectoria</span></h2>
            <div className="education-row">
                <div className="education-column">
                    <h3 className='title'>Educación</h3>

                    <div className="education-box">
                        <div className="education-content">
                            <div className="content">
                                <div className="year">
                                    <i><FaCalendarAlt /> Sept. 2022 - Jun. 2023</i>
                                    <h3>Software Fundations - Holberton School</h3>
                                    <p>Programa de formación a tiempo completo, de nueve meses de duración, basado en cohortes, dirigido por proyectos, aprendizaje entre compañeros y de autoaprendizaje.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="education-box">
                        <div className="education-content">
                            <div className="content">
                                <div className="year">
                                    <i><FaCalendarAlt /> Actualmente</i>
                                    <h3>Analisis y Desarrollo de Software - SENA</h3>
                                    <p>Formación tecnológica en Análisis y Desarrollo de Software, está enfocado en el desarrollo de habilidades alrededor de las actividades inherentes al proceso de creación de aplicaciones informáticas, de acuerdo con los requerimientos funcionales y técnicos para una solución de negocio.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="education-column">
                    <h3 className='title'>Experiencia Laboral</h3>

                    <div className="education-box">
                        <div className="education-content">
                            <div className="content">
                                <div className="year">
                                    <i><FaCalendarAlt /> Jun. - jul. 2023</i>
                                    <h3>Desarrollador Frontend - Coderise</h3>
                                    <p>Diseño y creación de la interfaz de un sistema de reclutamiento entre empresas y estudiantes llamado Holbie Talent Hub. Mi enfoque principal estuvo en garantizar un diseño atractivo y funcional, así como mejorar el rendimiento y la usabilidad del frontend.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;