import { scrollToTop } from '../utilities/Scroll';
import './Footer.css'
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedin-logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="main-footer">
            <div className="main-container">
                <div className="footer-top">
                    <div className="footer-name">
                        <h2 className="my-name">
                            Ayush Patel
                        </h2>
                        <p className="footer-description">
                        Software Engineer with a passion for building beautiful and functional applications
                        </p>
                    </div>
                    <div className="footer-socials">
                        <h2>
                            Social
                        </h2>
                        <div className="social-links">
                            <a href="https://linkedin.com/in/ayush-patel-b55995291" className="social-link" target="_blank">
                                <img src={linkedinLogo} alt="linkedin" />
                            </a>
                            <a href="https://github.com/Ayushpatel2026" className="social-link" target="_blank">
                                <img src={githubLogo} alt="github" />
                            </a>    
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; Copyright {currentYear}, Made by
                    <a className="name-link" onClick={scrollToTop}> Ayush Patel</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;