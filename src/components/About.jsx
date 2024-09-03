import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';

export default function About() {
    return (
        <div className="about">
            <div className="about-header">
                <h2>About</h2>
                <div className="accent-box"></div>
            </div>
            <div className="about-text">
                <p>As a dedicated front-end web developer, I specialize in 
                    crafting dynamic and efficient web applications using JavaScript 
                    and React. My passion lies in writing clean, scalable code that 
                    drives interactive and high-performance user experiences. 
                    With a solid foundation in modern web technologies, I excel at 
                    solving complex challenges and building intuitive interfaces that 
                    meet user needs and business goals.
                    <br></br>
                    <br></br>
                    In my downtime, you’ll find me hitting new PRs on Strava or 
                    shredding down the mountain on my board. I’m always on the 
                    lookout for new adventures and experiences, both in and out of 
                    the code editor.
                    <br></br>
                    <br></br>
                    Explore my portfolio to see how I blend creativity with technical 
                    expertise to bring projects to life.</p>
            </div>
            <div className="skills">
                <FontAwesomeIcon icon={faHtml5} className="fa" style={{color: '#DE4B25'}}/>
                <FontAwesomeIcon icon={faCss3Alt} className="fa" style={{color: '#2862E3'}}/>
                <FontAwesomeIcon icon={faJs} className="fa" style={{color: '#E9D54C'}}/>
                <FontAwesomeIcon icon={faReact} className="fa" style={{color: '#5ED4F4'}}/>
                <FontAwesomeIcon icon={faSass} className="fa" style={{color: '#FF469B'}}/>
                <FontAwesomeIcon icon={faNodeJs} className="fa" style={{color: '#509941'}}/>
            </div>
        </div>
    )
}