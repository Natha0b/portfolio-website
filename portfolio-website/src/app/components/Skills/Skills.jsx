import React from 'react';
import './skills.css'
import Projects from '../Projects/Projects';

function Skills() {
    return (
        <section className='skills'>
            <h2 className="heading">Mis <span>Proyectos</span></h2>

            <Projects />

            <div className="skills-row">
                <div className="skills-column">
                    <h3 className="title">Habilidades Técnicas</h3>
                    <div className="progress">
                        <img src="https://images.vexels.com/media/users/3/166383/isolated/preview/6024bc5746d7436c727825dc4fc23c22-icono-de-lenguaje-de-programacion-html.png" alt="" />
                        <img src="https://logodownload.org/wp-content/uploads/2017/04/css-3-logo-1.png" alt="" />
                        <img src="https://images.vexels.com/media/users/3/166403/isolated/preview/a5a33bf3004830a2bd581e9fa65de660-icono-del-lenguaje-de-programacion-javascript.png" alt="" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="" />
                        <img src="https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png" alt="" />
                        <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3219990/nextjs-icon-md.png" alt="" />
                        <img src="https://images.vexels.com/media/users/3/166477/isolated/preview/9bb722f0e85ddbc1ce0f064534fd2311-icono-del-lenguaje-de-programacion-python.png" alt="" />
                        <img src="https://seeklogo.com/images/M/MySQL-logo-17DB4E5FD6-seeklogo.com.png" alt="" />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Skills;