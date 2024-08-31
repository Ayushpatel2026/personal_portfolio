import './Home.css';
import { scrollToSection } from '../utilities/Scroll';


function Home(){
    return (
        <section id="home">
            <div className="home-content">
                <h1 className="home-title">Hey, I am Ayush Patel</h1>
                <div className="home-description">
                    <p className="home-description-text">
                        I am a software engineer with expertise in full stack development and a passion for problem solving
                    </p>
                </div>
                
                <div className="project-button">
                    <a onClick={() => scrollToSection('projects')} className="project-link">
                        Projects
                    </a>
                </div>
            </div>
        </section>
    
    );
}

export default Home;