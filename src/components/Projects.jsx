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
                        <a href="https://sgalbert818-sync-social.netlify.app/" target="_blank" rel="noreferrer">
                            <button class="buttonfx slideleft">Live App</button>
                        </a>                        <button class="buttonfx slideleft">Learn More</button>
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
                        <a href="https://react-nytimes-games.netlify.app/" target="_blank" rel="noreferrer">
                            <button class="buttonfx slideleft">Live App</button>
                        </a>
                        <button class="buttonfx slideleft">Learn More</button>
                    </div>
                </div>
                <div className="project p-last">
                    <div className="project-text pt-switch">
                        <h2>Resort Selector</h2>
                        <h4>A simple web app built with vanilla JavaScript, harnessing the power of APIs and external tools.</h4>
                        <a href="https://resort-selector-project.netlify.app/" target="_blank" rel="noreferrer">
                            <button class="buttonfx slideleft">Live App</button>
                        </a>                        <button class="buttonfx slideleft">Learn More</button>
                    </div>
                    <div className="blue-background b-switch">
                        <img className="project-img" src={resortselector} alt="Resort Selector App"></img>
                    </div>
                </div>
            </div>

        </div>
    )
}