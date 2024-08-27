import './Contact.css'
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedin-logo.png';

function Contact() {
    return(
        <section id="contact">
            <h2 className="contact-heading">Contact</h2>
            <p>Thanks for visiting my website!</p>
            <p> Check out my projects on my
                <a className="contact-link" target="_blank" href="https://github.com/Ayushpatel2026">
                    <span>GitHub</span>
                    <img src={githubLogo} alt="github" />
                </a>
            </p>
            <p>Feel free to reach out to me at patea237@mcmaster.ca or on 
                <a className="contact-link" target="_blank" href="https://linkedin.com/in/ayush-patel-b55995291">
                    <span>LinkedIn</span>
                    <img src={linkedinLogo} alt="linkedin" />
                </a>
            </p>
        </section>
    );
}

export default Contact;