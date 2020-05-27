import React from "react";

import "./Display.css";

const Display = () => {

    return (
        <div class="top-container">
            <h1 className="intro">Hey , I'm <span class="name">Esha Vats</span> </h1>
            <p className="begin">a web developer.</p>
            <img className="mountain" src="images/mounsil.png" alt="mountain_img" />
        </div>
    );
};

export default Display;