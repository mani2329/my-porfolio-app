import React from 'react'
import HomeBanner from '../images/home.png'
import '../pages/Portfolio.css'

function Home() {
  return (
    <>
         <header className="header">
        <a href="/" className="logo">Portfolio</a>
        <i className="bx bx-menu menu-icon" id="menu-icon"></i>
        
        <nav className="navbar">
            <a className="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello, It's Me</h3>
                <h1>Mani Roy</h1>
                <h3>And I'm a <span>Frontend Developer</span></h3>
                <p>"Passionate Frontend Developer with a keen eye for user-centric design 
                    and a proven track record of crafting visually appealing and intuitive
                     web experiences. Proficient in translating mockups and wireframes into
                      clean, responsive, and interactive interfaces using a combination of 
                      HTML, CSS, and JavaScript. 
                </p>
                <div className="social-media">
                    <a href="/"><i className='bx bxl-facebook'></i></a>
                    <a href="/"><i className='bx bxl-twitter' ></i></a>
                    <a href="/"><i className='bx bxl-instagram-alt' ></i></a>
                    <a href="/"><i className='bx bxl-linkedin' ></i></a>
                </div>
                
                    <a href="/" className="btn">Download CV</a>
                </div>

                <div className="home-img">
                    <img src={HomeBanner} alt=""/>
                </div>     

        </section>

      
    </>
  )
}

export default Home
