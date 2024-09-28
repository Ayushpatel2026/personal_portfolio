import "./About.css";


function About(){
    return (
        <section id="about">
            <div className="main-container">
                <span className="about-heading">
                    About Me
                </span>
                <p className="about-description">
                    Hey, I'm Ayush Patel, a software engineer based in Hamilton, Ontario, Canada. I have developed a wide range of software from games to full-stack web apps. 
                    I am currently a student at McMaster University studying Software Engineering. I am passionate about learning new technologies and building new projects.
                    I am always looking for new opportunities to learn and grow as a developer. Please feel free to reach out to me if you have any questions or would like to work together.
                </p>
                <div className="skills-section">
                    <h3> My Skills </h3>
                    <div className="skills">
                        <div className="skill_icon"> Java </div>
                        <div className="skill_icon"> C </div>
                        <div className="skill_icon"> Python </div>
                        <div className="skill_icon"> JavaScript </div>
                        <div className="skill_icon"> React </div>
                        <div className="skill_icon">Nextjs</div>
                        <div className="skill_icon"> GitHub </div>
                        <div className="skill_icon"> Agile </div>
                        <div className="skill_icon"> Quartus </div>
                        <div className="skill_icon"> Verilog </div>
                        <div className="skill_icon"> FPGA boards</div>
                        <div className="skill_icon">ARM64</div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;