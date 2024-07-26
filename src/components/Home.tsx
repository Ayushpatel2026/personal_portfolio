import './Home.css';


function Home(){
    return (
        <section id="home">
            <div className="home-content">
                <h1 className="home-title">Hey, I am Ayush Patel</h1>
                <div className="home-description">
                    <p className="home-description-text">
                        I am a full-stack developer with a passion for building beautiful and functional applications.
                    </p>
                </div>
                
                <div className="project-button">
                    <a href='#projects' className="project-link">
                        Projects
                    </a>
                </div>
            </div>
        </section>
    
    );
}

export default Home;