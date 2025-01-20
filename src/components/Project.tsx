import './Project.css'
// @ts-ignore
import React from 'react'

interface ProjectProps {
    id?: string;
    projectTitle: string;
    projectDescription: string;
    gitHubLink: string;
    websiteLink?: string;
}

function Projects({id, projectTitle, projectDescription, gitHubLink, websiteLink} : ProjectProps) {
    return (
        <div className="project" id={id}>
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
