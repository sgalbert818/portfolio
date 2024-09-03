import React from "react"
import Typewriter from 'typewriter-effect';

export default function Intro() {


    return (
        <div className="intro">
            <div className="intro-text">
                <h1>Hello, I'm <span className="accent">Sarah</span>.<br></br><Typewriter
                    options={{
                        strings: [`I'm a front-end software engineer`, `I'm a web developer`, `I'm an aspiring pro snowboarder`],
                        autoStart: true,
                        loop: true,
                      }}
                /></h1>
            </div>
        </div>
    )
}