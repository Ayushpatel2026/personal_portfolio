import './Experience.css';

interface ExperienceProps {
    jobTitle: string;
    companyName: string;
    timePeriod: string;
    jobDescription: string[];
}

function Experience({jobTitle, companyName, timePeriod, jobDescription} : ExperienceProps) {
    return (
        <div className="experience-card">
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
