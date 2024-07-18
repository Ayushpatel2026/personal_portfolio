import Button from './Button';
import './Header.css';

function Header(){
    const scrollToSection = (id: string) => {
        console.log("Scrolling to section: ", id);
        const element = document.getElementById(id);
        if (element) { // Check if element is not null
            const yOffset = -55; // Adjust this value according to your header height
            const yPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;
            console.log(yPosition);
    
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
        } else {
            console.warn(`Element with id '${id}' not found.`);
        }
    };

    return (
        <div className="header">
            <div className="left-section">
                <h1>Ayush Patel</h1>
            </div>
            <div className="right-section">
                <Button onClick={() => scrollToSection('about')}><a>About</a></Button>
                <Button onClick={() => scrollToSection('experience')}><a>Experience</a></Button>
                <Button onClick={() => scrollToSection('projects')}><a>Projects</a></Button>
                <Button onClick={() => scrollToSection('contact')}><a>Contact</a></Button> {/* Contact button will have different style*/}
            </div>
        </div>
    );
}

export default Header;