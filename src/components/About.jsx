import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';

export default function About() {
    return (
        <div className="about">
            <div className="about-header">
                <h2>About</h2>
                <div className="accent-box"></div>
            </div>
            <div className="about-text">
                <p>I graduated from the University of Arizona with a degree in 
                    neuroscience in 2020 and pursued biomedical research, 
                    contributing to the development of an artificial pancreas. 
                    My journey continued with a PhD program in Fall 2022, but I 
                    quickly realized my true passion was in software. This transition
                    allowed me to redirect my analytical skills and passion for 
                    problem-solving toward software development.
                    <br></br>
                    <br></br>
                    As a dedicated full-stack developer, I specialize in
                    crafting dynamic and efficient web applications using JavaScript
                    and React on the frontend and Python or Node.js on the backend. 
                    My passion lies in writing clean code that drives interactive 
                    user experiences. With a solid foundation in modern web technologies, 
                    I excel at solving complex challenges and building intuitive 
                    interfaces that meet user needs and business goals.
                    <br></br>
                    <br></br>
                    In my downtime, you’ll find me hitting new PRs on Strava or
                    shredding down the mountain on my board. I’m always on the
                    lookout for new adventures and experiences, both in and out of
                    the IDE. Explore my portfolio to see how I blend creativity with 
                    technical expertise to bring projects to life.</p>
            </div>
            <div className="skills">
                <FontAwesomeIcon icon={faHtml5} className="fa" style={{ color: '#DE4B25' }} />
                <FontAwesomeIcon icon={faCss3Alt} className="fa" style={{ color: '#2862E3' }} />
                <FontAwesomeIcon icon={faJs} className="fa" style={{ color: '#E9D54C' }} />
                <FontAwesomeIcon icon={faReact} className="fa" style={{ color: '#5ED4F4' }} />
                <FontAwesomeIcon icon={faSass} className="fa" style={{ color: '#FF469B' }} />
                <FontAwesomeIcon icon={faNodeJs} className="fa" style={{ color: '#509941' }} />
                <FontAwesomeIcon icon={faPython} className="fa" style={{ color: '#F4C236' }} />
            </div>
        </div>
    )
}