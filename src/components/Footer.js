import React from "react";

import "./Footer.css";

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <div class="bottom-container">
        <br />
        <i class="fab fa-linkedin social-icon"></i>
        <a class="footer-link" href="https://www.linkedin.com/in/esha-vats-5b533b156/ ">LinkedIn</a>
        <i class="fab fa-github social-icon"></i>
        <a class="footer-link" href="https://github.com/eshavats">Github</a>
        <i class="fab fa-instagram social-icon"></i>
        <a class="footer-link" href="https://www.instagram.com/slaycoldplay/ ">Instagram</a>
        <p class="end">© {year} Esha Vats. All rights reserved.</p>
        <br />
      </div>
    );
};

export default Footer;