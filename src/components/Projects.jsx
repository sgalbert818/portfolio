import React from "react"
import nytimes from "../images/nytimes.png"
import resortselector from "../images/resort-selector.png"
import plantpal from "../images/plantpal.png"

export default function Projects() {
    return (
        <div className="projects">
            <div className="about-header">
                <h2>Projects</h2>
                <div className="accent-box"></div>
            </div>
            <div className="projects-list">
                <div className="project">
                    <div className="project-text pt-switch">
                        <h2>Plant Pal</h2>
                        <h4>A serverless social application with automated SMS reminders.</h4>
                        <h4>HTML, CSS, JavaScript, React, Node.js, AWS (Amplify, Cognito, Lambda, API Gateway, DynamoDB)</h4>
                        <h4>Demo Login for Live App: lafopin399@marchub.com, Testing123!</h4>
                        <a href="https://main.d1r8tr0d72jpo5.amplifyapp.com/" target="_blank" rel="noreferrer">
                            <button className="buttonfx slideleft">Live App</button>
                        </a>
                        <a href="https://github.com/sgalbert818/plant-pal" target="_blank" rel="noreferrer">
                            <button className="buttonfx slideleft">Learn More</button>
                        </a> 
                    </div>
                    <div className="blue-background b-switch">
                        <img className="project-img" src={plantpal} alt="Plant Pal application"></img>
                    </div>
                </div>
                <div className="project">
                    <div className="blue-background">
                        <img className="project-img" src={nytimes} alt="New York Times Games App Clone"></img>
                    </div>
                    <div className="project-text">
                        <h2>New York Times Games Clone</h2>
                        <h4>All of your favorite New York Times Games built from scratch using React.</h4>
                        <h4>HTML, CSS, JavaScript, React</h4>
                        <a href="https://react-nytimes-games.netlify.app/" target="_blank" rel="noreferrer">
                            <button className="buttonfx slideleft">Live App</button>
                        </a>
                        <a href="https://github.com/sgalbert818/react-nytimes-games" target="_blank" rel="noreferrer">
                            <button className="buttonfx slideleft">Learn More</button>
                        </a>                    </div>
                </div>
                <div className="project p-last">
                    <div className="project-text pt-switch">
                        <h2>Resort Selector</h2>
                        <h4>A simple web app built with vanilla JavaScript, harnessing the power of APIs and external tools.</h4>
                        <h4>HTML, CSS, JavaScript</h4>
                        <a href="https://resort-selector-project.netlify.app/" target="_blank" rel="noreferrer">
                            <button className="buttonfx slideleft">Live App</button>
                        </a>
                        <a href="https://github.com/sgalbert818/resort-selector" target="_blank" rel="noreferrer">
                            <button className="buttonfx slideleft">Learn More</button>
                        </a> 
                    </div>
                    <div className="blue-background b-switch">
                        <img className="project-img" src={resortselector} alt="Resort Selector App"></img>
                    </div>
                </div>
            </div>

        </div>
    )
}