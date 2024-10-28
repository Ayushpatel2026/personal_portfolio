import './Experience.css';

interface ExperienceProps {
    id?: string;
    jobTitle: string;
    companyName: string;
    timePeriod: string;
    jobDescription: string[];
}

function Experience({id, jobTitle, companyName, timePeriod, jobDescription} : ExperienceProps) {
    return (
        <div className="experience-card" id={id}>
          <div className="experience-left">
            <h3 className="experience-job-title">{jobTitle}</h3>
            <span className="experience-company-time">
                <strong>{companyName}</strong> | {timePeriod}
            </span>
          </div>
          <div className="experience-right">
            <ul className="experience-description">
                {jobDescription.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
        </div>
    );
}

export default Experience;
