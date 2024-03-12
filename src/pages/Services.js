import React from 'react'

function Services() {
  return (
    <div>
        <section className="services" id="services">
        <h2 className="heading">Our <span> Services</span></h2>

        <div className="services-container">
            <div className="services-box">
                <i className='bx bx-code-alt'></i>
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Porro iusto illum deserunt. Libero, necessitatibus. Libero itaque ipsa
                     dolores labore impedit!</p>
                     <a href="/" className="btn">Read More</a>
            </div>
            <div className="services-box">
                <i className='bx bxs-paint'></i>
                <h3>Graphic Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Porro iusto illum deserunt. Libero, necessitatibus. Libero itaque ipsa
                     dolores labore impedit!</p>
                     <a href="/" className="btn">Read More</a>
            </div>

            <div className="services-box">
                <i className='bx bx-bar-chart-alt'></i>
                <h3>Digital Marketing</h3>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Porro iusto illum deserunt. Libero, necessitatibus. Libero itaque ipsa
                     dolores labore impedit!</p>
                     <a href="/" className="btn">Read More</a>
            </div>   
        </div>
    </section>
      
    </div>
  )
}

export default Services
