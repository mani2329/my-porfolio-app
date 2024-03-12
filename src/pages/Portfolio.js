import React from 'react'
import Portfolio1 from '../images/portfolio1.jpg'
import Portfolio2 from '../images/portfolio2.jpg'
import Portfolio3 from '../images/portfolio3.jpg'
import Portfolio4 from '../images/portfolio4.jpg'
import Portfolio5 from '../images/portfolio5.jpg'
import Portfolio6 from '../images/portfolio6.jpg'

function Portfolio() {
  return (
    <div>
    <section class="portfolio" id="portfolio">
        <h2 class="heading">Latest <span>Projects</span></h2>

        
        <div class="portfolio-container">

            <div class="portfolio-box">
                <img src={Portfolio1} alt=""/>
                <div class="portfolio-layer">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <a href="/"><i class='bx bx-link-external'></i></a>
                </div>
            </div>

                    <div class="portfolio-box">
                        <img src={Portfolio2} alt=""/>
                        <div class="portfolio-layer">
                            <h4>Web Design</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, blanditiis.</p>
                            <a href="/"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>

                        <div class="portfolio-box">
                            <img src={Portfolio3} alt=""/>
                            <div class="portfolio-layer">
                                <h4>Web Design</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, blanditiis.</p>
                                <a href="/"><i class='bx bx-link-external'></i></a>
                            </div>
                        </div>
                

        
                        <div class="portfolio-box">
                            <img src={Portfolio4} alt=""/>
                            <div class="portfolio-layer">
                                <h4>Web Design</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                <a href="/"><i class='bx bx-link-external'></i></a>
                            </div>
                        </div>
                
                        <div class="portfolio-box">
                            <img src={Portfolio5} alt=""/>
                            <div class="portfolio-layer">
                                <h4>Web Design</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, blanditiis.</p>
                                <a href="/"><i class='bx bx-link-external'></i></a>
                            </div>
                        </div>
                

                        <div class="portfolio-box">
                            <img src={Portfolio6} alt=""/>
                            <div class="portfolio-layer">
                                <h4>Web Design</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, blanditiis.</p>
                                <a href="/"><i class='bx bx-link-external'></i></a>
                            </div>
                        </div>
            </div>

    </section>
    </div>
  )
}

export default Portfolio
