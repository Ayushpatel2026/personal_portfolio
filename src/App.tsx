import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Home from './components/Home'
import Footer from './components/Footer'
import Experience from './components/Experience'
import './App.css'

function App() {

  return (
    <div className="app-container">
      <Header />
      <Home/>
      <About />
      <section id="experience" className="section-container">
        <span className="section-heading">
          Experience
        </span>
        <div className="project-exp-container">
          <Experience
            id="Research"
            jobTitle="Mobile App Security Research Intern"
            companyName="McMaster Center for Software Certification (McSCert)"
            timePeriod="May 2025 - Present"
            jobDescription={[
              "Investigating the security vulnerabilities of mobile healthcare applications"
            ]}
          />
          <Experience

            id="SWE"
            jobTitle="Software Developer"
            companyName="iBiomed Society - McMaster"
            timePeriod="Dec 2024 - Present"
            jobDescription={[
              "Building a mobile app for Scleroderma Canada as part of the Society's Tech4Good initiative", 
              "Building a website for the iBiomed Society",
              ]}
          />
          <Experience
            id="TA"
            jobTitle="Teaching Assistant - Computer Architecture"
            companyName="McMaster University"
            timePeriod="September 2024 - December 2024"
            jobDescription={[
              "Guide students in writing ARM64 assembly code and in integrating C code with assembly programs",
              "Assist students in understanding core concepts of computer architecture, including memory hierarchy, caches, and CPU design",
              ]}
          />
          <Experience
            id="TA"
            jobTitle="Teaching Assistant - Digital Systems"
            companyName="McMaster University"
            timePeriod="September 2024 - December 2024"
            jobDescription={[
              "Supervised and assisted students in configuring FPGA boards, providing guidance on Verilog programming and Quartus software", 
              "Facilitated lab sessions by demonstrating key concepts in digital systems and troubleshooting technical issues with FPGA implementation",
              ]}
          />
          <Experience
            id="ERA"
            jobTitle="Educational Research Assistant"
            companyName="McMaster University"
            timePeriod="June 2024 - August 2024"
            jobDescription={[
              "Created an automated testing environment using TCL/Expect scripts to automatically grade hundreds of ARM64 assembly assignments, reducing time spent grading and improving consistency of the grading process", 
              "Created assignments and tutorial material for C and ARM64 assembly programming courses, improving student understanding of course material and increasing student engagement",
              ]}
          />
        </div>
      </section>
      <section id="projects" className="section-container" style={{ backgroundColor: 'rgb(235, 235, 235)' }}>
        <span className="section-heading">
          Projects
        </span>
        <div className="project-exp-container">
          <Project

            id='booking-app'
            projectTitle="MERN Hotel Booking App"
            projectDescription="The Hotel Booking Application is a full-stack solution designed and developed using MongoDB, Express.js, React.js, and Node.js. It provides users with the ability to search, book, and manage hotel reservations through a modern, responsive interface built with React.js and Tailwind CSS. The backend, powered by Node.js and Express.js, integrates MongoDB to ensure efficient storage and retrieval of user, booking, and hotel data. To guarantee reliability and functionality, end-to-end testing was implemented using Playwright."
            gitHubLink='https://github.com/Ayushpatel2026/booking-app'
            websiteLink='https://mern-booking-app-fs1i.onrender.com/'
          />
          <Project
            id='cnn-malaria'
            projectTitle="Malaria Diagnosis using CNN's"
            projectDescription='The Malaria Diagnosis with Convolutional Neural Networks project focuses on developing an end-to-end machine learning pipeline to detect malaria by classifying cell images as infected or uninfected, with an accuracy of 94% Built using TensorFlow, Keras, and DVC, the project implements modular pipelines for data ingestion, preprocessing, and training while adhering to MLOps principles such as version control and pipeline orchestration. Additionally, a Flask-based web application was developed to provide users with real-time predictions by allowing them to upload cell images, showcasing the practical application of deep learning in healthcare.'
            gitHubLink="https://github.com/Ayushpatel2026/cnn-malaria"
          />
          <Project
            id='ecommerce'
            projectTitle="E-Commerce Website"
            projectDescription="This is a full stack application built with Next.js, Sanity as the backend CMS, Stripe for payment processing and Jest for testing functionality. This modern e-commerce website provides a seamless shopping experience from browsing products, adding to cart and completing a purchase."
            gitHubLink='https://github.com/Ayushpatel2026/ecommerce'
            websiteLink='https://ecommerce-headphonestore.vercel.app/'
          />
          <Project
            id='rescue'
            projectTitle="Rescue Mission"
            projectDescription="This collaborative class project is an exploration command center for the Island game. Coded in the Java programming language, this project was a great way to learn SOLID and Agile principles. It was also my first introduction to complex UML diagrams and full unit testing."
            gitHubLink="https://github.com/2AA4-W24/a2-rescue-mission-team-217"
          />
          <Project
            id='stock-predictor'
            projectTitle="Stock Price Predictor"
            projectDescription='This project implements a machine learning model to predict stock prices using a Multilayer Perceptron (MLP) and serves predictions through a Flask API. The project involves data exploration, feature engineering, model training, and deployment through a web interface.'
            gitHubLink="https://github.com/Ayushpatel2026/stock_predictor"
          />
          <Project
            id='patient-manager'
            projectTitle="Patient Manager"
            projectDescription="This app simplifies the process of appointments for both patients and clinics allowing easy booking and cancelling of appointments by both patients and clinic admins. This full stack patient management application is built using Next.js, React.js, Appwrite for user authenticationa and data storage, and TailwindCSS and ShadCN for styling. It also uses Twilio for SMS notifications."
            gitHubLink='https://github.com/Ayushpatel2026/patient-manager'
            websiteLink='https://patient-manager-one.vercel.app/'
          />
          <Project
            id='chess'
            projectTitle="Chess Engine"
            projectDescription="This project is a Java-based application that leverages Java Swing utilities to provide a GUI. It has allowed me to practically apply object oriented programming concepts learned in class and showcases a minimax algorithm to calculate computer moves."
            gitHubLink="https://github.com/Ayushpatel2026/chess-engine"
          />
          <Project
            id='note-app'
            projectTitle="Note Taking Application"
            projectDescription="This front end application allows users to create, edit, and organize notes with markdown support and tag-based categorization. It was created using Reactjs, Bootstrap and TypeScript"
            gitHubLink='https://github.com/Ayushpatel2026/note-app'
            websiteLink='https://ayushpatel2026.github.io/note-app/'
          />
        </div>
      </section>
      <Contact />
      <Footer/>
    </div>
  )
}

export default App;
