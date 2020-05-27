import React from "react";

import "./About.css";

const About = () => {
    return (
        <div id="about">
            <div class="row">
            <div class="side">
                <h2 className="about-heading">ABOUT ME <i class="fas fa-user-edit"></i></h2>
                <h5>Hola! I'm so glad you're here.
                My name is <span className="highlight">Esha Vats</span> and I'm a Fullstack Web Developer.</h5>
                <img src="images/me-prof.jpg" className="hello-img" />
                
                <h2 className="about-heading edu">MY EDUCATION <i class="fas fa-book-reader"></i></h2>
                <h5>I'm currently a BTech Informartion Technology Undergraduate.</h5>
                <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <a href="https://kjsce.somaiya.edu/en">K.J Somaiya College Of Engineering</a>
                    <span class="badge badge-primary badge-pill">2018-2022</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <a href="https://iitianspace.com/">IITian's PACE</a>
                    <span class="badge badge-primary badge-pill">2016-2018</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <a href="http://www.aees.gov.in/htmldocs/aec_schools.html">Atomic Energy Central School 4</a>
                    <span class="badge badge-primary badge-pill">2005-2016</span>
                </li>
                </ul>
            </div>
            <div class="main">
                <h2 className="about-heading">MY BIO</h2>
                <h5>Get to know about my professional side!</h5>
                <img src="images/hangout.gif" className="hangout"/>
                <p className="about-me">I'm a <span className="highlight">Full-Stack Web Developer</span>. I have an interest in designing and developing creative applications which enhance user experience.
                My key strengths are working efficiently and thinking creatively. <br /> I am a patient learner and have a decent grasping power. I'm very organised and always finish my work before time. I can learn things quickly and can be productive at the same time. I can also be of great help when it comes to ideating and showing creativity. </p>
            </div>
            </div>
        </div>
    );
};

export default About;