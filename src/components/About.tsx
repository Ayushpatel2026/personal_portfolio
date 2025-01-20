import "./About.css";
import { scrollForSkills, scrollToSection } from "../utilities/Scroll";

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
                        <div className="skill_icon"> Data Structures and Algorithms </div>
                        <div className="skill_icon" onClick={() => scrollForSkills('rescue')}> Software Design Principles </div>
                        <div className="skill_icon" onClick={() => scrollForSkills('rescue')}> Agile Methodologies </div>
                        <div className="skill_icon" onClick={() => scrollForSkills('TA')}> Digital System Design </div>
                        <div className="skill_icon" onClick={() => scrollForSkills('chess')}> Object Oriented Programming </div>
                        <div className="skill_icon" onClick={() => scrollForSkills('SWE')}> Full Stack Web Development </div>
                        <div className="skill_icon" onClick={() => scrollForSkills('cnn-malaria')}> Machine Learning </div>
                        <div className="skill_icon" onClick={() => scrollForSkills('TA')}> Computer Architecture </div>
                        <div className="skill_icon" onClick={() => scrollForSkills('booking-app')}> Software Testing </div>
                        <div className="skill_icon" onClick={() => scrollForSkills('cnn-malaria')}> Data Analysis </div>
                    </div>
                    <h3> Programming Languages and Tech! </h3>
                    <div className="skills">
                        <div className="tech-icon-container" onClick={() => scrollForSkills('rescue')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/Java-%237883ff?style=for-the-badge&logo=JAVA&logoColor=%23ffffff" alt="Java Badge"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollForSkills('cnn-malaria')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/Python-%2380fffb?style=for-the-badge&logo=PYTHON&logoColor=%23ffffff" alt="Python Badge"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollForSkills('ERA')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/C-%2378f1ff?style=for-the-badge&logo=C&logoColor=%23ffffff" alt="C"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollForSkills('ecommerce')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/JavaScript-%ff3b68?style=for-the-badge&logo=JavaScript&logoColor=%23ffffff" alt="JavaScript"/>
                        </div>
                        <div className="tech-icon-container">
                            <img className="tech-icon" src="https://img.shields.io/badge/SQL-%23e38c00?style=for-the-badge&logo=postgresql&logoColor=white" alt="SQL"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollForSkills('ERA')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/Linux-%23d294ff?style=for-the-badge&logo=Linux&logoColor=white" alt="Linux"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollToSection('projects')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/Git-%23e44d32?style=for-the-badge&logo=git&logoColor=white" alt="Git"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollToSection('projects')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/GitHub-%23ff006f?style=for-the-badge&logo=GitHub&logoColor=%23ffffff" alt="GitHub"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollForSkills('patient-manager')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollForSkills('booking-app')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollForSkills('ecommerce')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollForSkills('ecommerce')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/Jest-%23c21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollToSection('booking-app')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/Node.js-%236155ab?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollToSection('projects')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/HTML5-%23ffadef?style=for-the-badge&logo=HTML5&logoColor=%23ffffff" alt="HTML5"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollToSection('projects')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/CSS-%23bc7dff?style=for-the-badge&logo=CSS&logoColor=%23ffffff" alt="CSS"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollForSkills('patient-manager')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/ShadCN/UI-000000?style=for-the-badge&logo=shadcn&logoColor=white" alt="ShadCN UI"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollForSkills('note-app')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/Bootstrap-%23ff00aa?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollForSkills('ERA')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnubash&logoColor=white" alt="Bash"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollForSkills('TA')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/Verilog-%23ff8cd9?style=for-the-badge&logo=Verilog&logoColor=%23ffffff" alt="Verilog"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollForSkills('ERA')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/Assembly-%23544bb8?style=for-the-badge&logo=ARM&logoColor=%23ffffff" alt="Assembly"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollForSkills('stock-predictor')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/PyTorch-%23000dff?style=for-the-badge&logo=PyTorch&logoColor=%23ffffff" alt="PyTorch"/>/
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollForSkills('stock-predictor')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/Matplotlib-%235c21ff?style=for-the-badge&logo=Matplotlib&logoColor=white" alt="Matplotlib"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollForSkills('cnn-malaria')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/NumPy-%23bc5eff?style=for-the-badge&logo=NumPy&logoColor=%23ffffff" alt="NumPy"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollForSkills('cnn-malaria')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/Pandas-%2300b3ff?style=for-the-badge&logo=Pandas&logoColor=white" alt="Pandas"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollForSkills('cnn-malaria')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/Flask-%23ff0000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollForSkills('cnn-malaria')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/TensorFlow-%23ff6f00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="TensorFlow"/>
                        </div>
                        <div className="tech-icon-container">
                            <img className="tech-icon" src="https://img.shields.io/badge/Matlab-%238ff8ff?style=for-the-badge&logo=MathWorks&logoColor=white" alt="Matlab"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollForSkills('booking-app')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=fff&style=flat" alt="Express.js"/>
                        </div>
                        <div className="tech-icon-container" onClick={() => scrollForSkills('booking-app')}>
                            <img className="tech-icon" src="https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;