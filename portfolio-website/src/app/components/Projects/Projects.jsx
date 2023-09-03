import React from 'react'
import './projects.css'
import { FaGithub } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { SiFlask} from 'react-icons/si';



function Projects() {
    return (
        <div className='body'>
            <div className="card">
                <div className="face front">
                    <img src="https://static.vecteezy.com/system/resources/previews/018/134/207/original/3d-render-monitor-and-browser-code-programming-icon-png.png" alt="" />
                    <h3>Holbie Talent Hub.</h3>
                </div>
                <div className="face back">
                    <h3>Holbie Talent Hub.</h3>
                    <p>Diseño y creación de la interfaz de un sistema de reclutamiento entre empresas y estudiantes llamado Holbie Talent Hub. Mi enfoque principal estuvo en garantizar un diseño atractivo y funcional, así como mejorar el rendimiento y la usabilidad del frontend. Trabajé en estrecha colaboración con el equipo de backend para lograr una implementación eficiente y coherente de las características clave del producto.</p>
                    <div className="lenguages"><FaHtml5 /><FaCss3Alt /><FaReact /><FaJs /></div>
                    <div className="link">
                        <a href="https://github.com/Natha0b/holbie-talent-hub-client"><FaGithub /></a>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="face front">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/018/134/192/small_2x/3d-render-monitor-and-browser-website-eye-icon-png.png" alt="" />
                    <h3>Airbnb Clone.</h3>
                </div>
                <div className="face back">
                    <h3>Airbnb Clone.</h3>
                    <p>Segmento del proyecto Airbnb en Holberton School que cubre colectivamente conceptos fundamentales de programación de alto nivel. El objetivo del proyecto es eventualmente desplegar un servidor de una copia simple del sitio web de Airbnb.</p>
                    <div className="lenguages"><FaPython /><SiMysql /><SiFlask /></div>
                    <div className="link">
                        <a href="https://github.com/Natha0b/holbertonschool-AirBnB_clone_v4"><FaGithub /></a>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="face front">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/018/134/199/small_2x/3d-render-monitor-and-browser-rocket-startup-icon-png.png" alt="" />
                    <h3>Simple Shell.</h3>
                </div>
                <div className="face back">
                    <h3>Simple Shell.</h3>
                    <p>Proyecto para la reconstrucción del Shell Unix mediante un intérprete de línea de comandos, el cual se comunica con diversos programas realizando así acciones similares a los sistemas operativos Unix.</p>
                    <div className="lenguages"></div>
                    <div className="link">
                        <a href="https://github.com/Natha0b/holbertonschool-simple_shell"><FaGithub /></a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;