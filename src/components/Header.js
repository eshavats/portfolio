import React from "react";

import "./Header.css";

const Header = () => {

    return (
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#">Esha Vats <i class="fab fa-sketch diamond"></i></a>
            <button class="navbar-toggler toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="toggler-icon"><i class="fas fa-grip-lines"></i></span>
            </button>
            <div class="navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <a class="nav-link" href="#about">About Me<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Skills</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Projects</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Hobbies</a>
                </li>
            </ul>
            <span class="navbar-text">
                <ul class="nav navbar-nav navbar-right">
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fas fa-child"></i> Find me here</a>
                </li>
                </ul>
            </span>
            </div>
        </nav>
    );
};

export default Header;