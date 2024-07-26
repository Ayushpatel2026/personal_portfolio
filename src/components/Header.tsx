import './Header.css';
import {scrollToTop} from '../utilities/Scroll';

function Header(){
    const scrollToSection = (id: string) => {
        console.log("Scrolling to section: ", id);
        const element = document.getElementById(id);
        if (element) { // Check if element is not null
            const yOffset = -75; // Adjust this value according to your header height
            const yPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;
            console.log(yPosition);
    
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
        } else {
            console.warn(`Element with id '${id}' not found.`);
        }
    };

    return (
        <div className="header">
            <div className="logo-container" onClick={() => scrollToTop()}>
                <span className="header-logo-name">
                    AYUSH PATEL
                </span>
            </div>
            <div className="tab-section">
                <ul className="header-links">
                    <li className="header-link-wrapper" onClick={() => scrollToSection('about')}>
                        <a className="header-link">About</a>
                    </li>
                    <li className="header-link-wrapper" onClick={() => scrollToSection('experience')}>
                        <a className="header-link">Experience</a>
                    </li>
                    <li className="header-link-wrapper" onClick={() => scrollToSection('projects')}>
                        <a className="header-link">Projects</a>
                    </li>
                    <li className="header-link-wrapper" onClick={() => scrollToSection('contact')}>
                        <a className="header-link">Contacts</a>
                    </li>
    
                </ul>
                {/* <Tab className="header-tab" onClick={() => scrollToSection('about')}><a className="header-link">About</a></Tab>
                <Tab className="header-tab" onClick={() => scrollToSection('experience')}><a className="header-link">Experience</a></Tab>
                <Tab className="header-tab" onClick={() => scrollToSection('projects')}><a className="header-link">Projects</a></Tab>
                <Tab className="header-tab" onClick={() => scrollToSection('contact')}><a className="header-link">Contact</a></Tab> Contact button will have different style */}
            </div>
        </div>
    );
}

export default Header;