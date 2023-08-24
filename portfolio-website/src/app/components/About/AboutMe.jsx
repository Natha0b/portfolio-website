import React from 'react';

function AboutMe() {
  return (
    <section className='about'>
                <h2 className="heading">Sobre <span>Mi</span></h2>

                <div className="about-img">
                    <img src="./profile.jpeg" alt="" />
                    <span className="circle-spin"></span>
                </div>

                <div className="about-content">
                    <h3>Software Developer!</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure perferendis veniam optio nemo similique aut quam rerum dignissimos ea itaque!</p>
                    <div className='btn-box btns'>
                        <a href="#" className='btn'>Leer Mas</a>
                    </div>
                </div>
            </section>
  );
}

export default AboutMe;


