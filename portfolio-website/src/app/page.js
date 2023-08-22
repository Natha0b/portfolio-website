import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
    return (
        <main>
            <header className="header">
                <a href="#" className="logo">Nathaly.</a>

                <div className="menu-icon"></div>

                <nav className="navbar">
                    <a href="#" className="active">Inicio</a>
                    <a href="#">Sobre Mi</a>
                    <a href="#">Porfolio</a>
                    <a href="#">Educación</a>
                    <a href="#">Skills</a>
                    <a href="#">Contacto</a>

                </nav>

            </header>

            <section className="home">
                <div className="home-content">
                    <h1>Hi, I´m <span>Nathaly Ortiz</span></h1>
                    <div className="text-animate">
                        <h3>Desarrolladora de Software</h3>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, commodi ratione inventore ducimus ea laborum, facere similique unde dolor impedit explicabo minima magni, error porro deserunt eligendi.</p>

                    <div className="btn-box">
                        <a href="#" className="btn">Hire Me</a>
                        <a href="#" className="btn">Let´s Talk</a>
                    </div>
                </div>
            </section>
        </main>
    )
}
