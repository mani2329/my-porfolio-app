import React from 'react'
import AboutBanner from '../images/about.png'

function About() {
  return (
    <div>
       <section class="about" id="about">
            <div class="about-img">
                <img src={AboutBanner} alt=""/>
            </div>

        <div class="about-content">
            <h2 class="heading">About <span>Me</span></h2>
            <h3>Frontend Developer</h3>
            <p>I'm Mani Roy, a dedicated front-end developer with a degree in [Your Relevant Degree].
                 Proficient in HTML, CSS, and JavaScript, I create engaging and responsive web interfaces.
                  Passionate about design and technology, I aim to craft seamless, user-centered experiences.
                   My projects include [mention a notable project]. I prioritize pixel-perfect design, mobile 
                   responsiveness, and cross-browser compatibility. Collaborative and detail-oriented,
                    I work effectively with diverse teams. I'm eager to take on new challenges
                     and bring your web projects to life. Explore my portfolio, 
                     and let's connect to create stunning, user-centric web experiences together.
            </p>
            <a href="/" class="btn">Read More</a>
        </div>
    </section>

    </div>
  )
}

export default About
