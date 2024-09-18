import './Project.css'

import React from 'react'

interface ProjectProps {
    projectTitle: string;
    projectDescription: string;
    gitHubLink: string;
    websiteLink?: string;
}

function Projects({projectTitle, projectDescription, gitHubLink, websiteLink} : ProjectProps) {
    return (
        <div className="project">
            <div className="project-left">
                <h2 className="project-title">{projectTitle}</h2>
            </div>
            <div className="project-right">
                <p> {projectDescription}</p>
                <div className="project-links">
                    <a href={gitHubLink} className="github-link" target='_blank'>GitHub</a>
                    {websiteLink && <a href={websiteLink} target='_blank' className="website-link">Deployed App</a>}
                </div>
            </div>
        </div>
    )
}

export default Projects;