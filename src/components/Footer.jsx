import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer>
            <div className="icons">
                <a href="https://www.linkedin.com/in/sarah-albert-26b840188/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="fa"/>
                </a>
                <a href="https://github.com/sgalbert818" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="fa"/>
                </a>
                <a href="mailto:sgalbert818@yahoo.com">
                    <FontAwesomeIcon icon={faEnvelope} className="fa"/>
                </a>
            </div>
        </footer>
    )
}