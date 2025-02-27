import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Cafe-Managment-Sys</h2></a>
                <p>Developed a Café Management System with sorting, billing, and database management using Spring Boot, PostgreSQL, and Thyemleaf.</p>            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Smart-Contact-Manager</h2></a>
                <p>Designed, developed, and deployed a Smart Contact Manager using Spring Boot, React, and PostgreSQL, enabling secure contact storage and management.</p>            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Tukdyadas-Website</h2></a>
                <p>Designed, developed, and launched a spiritual website for Sant Tukdoji Maharaj using the MERN stack, offering resources and teachings online.</p>            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>StoreMate-Web-Application</h2></a>
                <p>Designed, developed, and deployed StoreMate, a complete store management application using Spring Boot, MySQL, and React, enabling efficient product, billing, and sales management.</p>            </div>
        </div>
    </div>
    );
}

export default Project;