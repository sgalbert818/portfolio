import React from "react"
import nytimes from "../images/nytimes.png"
import resortselector from "../images/resort-selector.png"
import syncsocial from "../images/sync-social.png"

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
                        <h2>Sync Social</h2>
                        <h4>A MERN stack social calendar app with user authentication through JSON web tokens.</h4>
                        <h4>HTML, CSS, JavaScript, React, Node.js, Express, MongoDB</h4>
                        <a href="https://sgalbert818-sync-social.netlify.app/" target="_blank" rel="noreferrer">
                            <button className="buttonfx slideleft">Live App</button>
                        </a>
                        <a href="https://github.com/sgalbert818/sync-social" target="_blank" rel="noreferrer">
                            <button className="buttonfx slideleft">Learn More</button>
                        </a> 
                    </div>
                    <div className="blue-background b-switch">
                        <img className="project-img" src={syncsocial} alt="Sync Social Calendar application"></img>
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