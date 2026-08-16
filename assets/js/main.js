/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
   const header = document.getElementById('header')
   // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
   this.scrollY >= 50 ? header.classList.add('shadow-header') 
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== PROJECT MODAL ===============*/
const projectCards = document.querySelectorAll('.projects__card');
const projectModal = document.getElementById('project-modal');
const projectModalClose = document.getElementById('project-modal-close');
const modalProjectTitle = document.getElementById('modal-project-title');
const modalGithubLink = document.getElementById('modal-github-link');
const modalProjectDescription = document.getElementById('modal-project-description');
const projectVideo = document.getElementById('project-video');
const projectImage = document.getElementById('project-image');

// PROJECT DATA
const projectData = {
    'privacy-transparency': {
        videoUrl: 'https://www.youtube.com/embed/k-5HXFbWKoI?autoplay=1&mute=1', 
        imageUrl: 'assets/img/privacy-transparency.png',
        title: 'AI-Driven Privacy Transparency for Mobile Health Apps',
        github: 'https://github.com/Ayushpatel2026/privacy-transparency',
        description: `Sleep Tracker is a mobile health application designed to demonstrate an AI-driven privacy transparency system for mobile health apps.
                     The app features a novel embedded UI that alerts users to data collection events with real-time, easy-to-understand explanations of privacy risks.
                     The app is built using React Native and Firebase. The backend is developed using Node.js and Express.js, providing a robust and scalable infrastructure for future development.`,
    },
    'movie-whiz': {
        videoUrl: 'https://www.youtube.com/embed/KZY19NNbA4M?autoplay=1&mute=1', 
        imageUrl: 'assets/img/movie-whiz.png',
        title: 'MovieWhiz',
        github: 'https://github.com/Ayushpatel2026/MovieWhiz',
        description: `MovieWhiz is an Android application that helps users identify forgotten movies using LLMs, soundtrack recognition, and movie databases.
                      I led the design and development of this project, which involved a full software development lifecycle, including requirements gathering, system architecture design, UML diagrams, implementation, and testing.
                      I developed a RESTful API backend using Express.js and tested it using Jest. The backend is designed for scalability and extensibility, allowing for future enhancements and integrations.
                      Key technologies include React Native, Express.js, Firebase and Android Studio.`
    },
    'rescue-mission': {
        //videoUrl: 'https://www.youtube.com/embed/your-rescue-mission-video-id?autoplay=1', 
        imageUrl: 'assets/img/rescue-mission.svg',
        title: 'Rescue Mission',
        github: 'https://github.com/Ayushpatel2026/rescue-mission',
        description: `A Java-based project that involves developing a control system for a rescue drone to explore an island, locate stranded individuals, and identify suitable rescue points efficiently.
                    This project emphasizes the use of design patterns and SOLID principles to create a modular and maintainable codebase.  
                    This project provided valuable experience in teamwork, project management, and software development using agile methodologies.`
    },
    'cnn-malaria': {
        videoUrl: 'https://www.youtube.com/embed/qsBpGCmDV74?autoplay=1&mute=1', 
        imageUrl: 'assets/img/malaria.png',
        title: 'CNN Malaria',
        github: 'https://github.com/Ayushpatel2026/cnn-malaria',
        description: `This project leverages Convolutional Neural Networks (CNNs) to classify blood cell images as either infected (parasitized) or uninfected with malaria.
                      Achieving an accuracy of 94%, this solution demonstrates the use of modern machine learning techniques and MLOps principles to build a robust, modular, and collaborative pipeline.`
    },
    'hotel-booking': {
        //videoUrl: 'https://www.youtube.com/embed/your-hotel-booking-video-id?autoplay=1', 
        imageUrl: 'assets/img/hotel-booking.png',
        title: 'Hotel Booking App',
        github: 'https://github.com/Ayushpatel2026/booking-app',
        description: `A full-stack hotel booking application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
                      This application provides a seamless experience for booking hotels, including payment integration via Stripe API and automated end-to-end testing using Playwright.`
    },
    'personal-website': {
        //videoUrl: 'https://www.youtube.com/embed/your-personal-website-video-id?autoplay=1', 
        imageUrl: 'assets/img/personal-website.png',
        title: 'Personal Website',
        github: 'https://github.com/Ayushpatel2026/personal_portfolio',
        description: `Welcome to my personal website, created using plain HTML, CSS, and JavaScript. Please feel free to suggest any improvements to this portfolio website.`
    },
    'pillmaxxer': {
        videoUrl: 'https://youtube.com/embed/XxTDMnj8NWA?autoplay=1&mute=1', 
        imageUrl: 'assets/img/pillmaxxer.png',
        title: 'PillMaxxer',
        github: 'https://github.com/Ayushpatel2026/PillMaxxer',
        description: `PillMaxxer is a mobile application that helps users manage their medications and track their health.`
    },
    'ibiomed-website': {
        //videoUrl: 'https://www.youtube.com/embed/your-personal-website-video-id?autoplay=1', 
        imageUrl: 'assets/img/ibiomed-website.png',
        title: 'iBiomed Society Website',
        github: 'https://github.com/Haaniyaahmed/iBMS-Website',
        description: `A dynamic, responsive website built with Next.js and Tailwind CSS, integrating external APIs for real-time content, reaching 500+ users.`
    },
    'scleroderma-app': {
        //videoUrl: 'https://www.youtube.com/embed/your-personal-website-video-id?autoplay=1', 
        imageUrl: 'assets/img/scleroderma-app.png',
        title: 'ScleroCare app',
        description: `A mobile application for managing scleroderma symptoms and tracking treatment progress build for Scleroderma Canada. The app was built using React Native and Firebase, providing a seamless experience for users to monitor their health and communicate with healthcare providers.`
    }
};


// Function to open the modal
const openProjectModal = (projectKey) => {
    const data = projectData[projectKey];
    if (data) {
        modalProjectTitle.textContent = data.title;

        if (!data.github) {
            modalGithubLink.style.display = 'none';
        } else {
            modalGithubLink.href = data.github;
        }
        modalProjectDescription.textContent = data.description;

        // Reset both elements
        projectVideo.style.display = 'none';
        projectImage.style.display = 'none';
        projectVideo.src = '';
        projectImage.src = '';

        if (data.videoUrl) {
            // Show video, hide image
            projectVideo.src = data.videoUrl;
            projectVideo.style.display = 'block';
            projectImage.style.display = 'none';
        } else if (data.imageUrl) {
            // Show image, hide video
            projectImage.src = data.imageUrl;
            projectImage.alt = data.title;
            projectImage.style.display = 'block';
            projectVideo.style.display = 'none';
        } else {
            // Show placeholder in video element
            projectVideo.style.display = 'flex';
            projectVideo.style.alignItems = 'center';
            projectVideo.style.justifyContent = 'center';
            projectVideo.innerHTML = `
                <div style="text-align: center; color: var(--text-color-light);">
                    <i class="ri-image-line" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
                    <p>No preview available</p>
                </div>
            `;
            projectImage.style.display = 'none';
        }

        projectModal.classList.add('show-modal');
    }
};

// Function to close the modal
const closeProjectModal = () => {
    projectModal.classList.remove('show-modal');
    // Reset both elements
    projectVideo.src = '';
    projectImage.src = '';
    projectVideo.innerHTML = '';
    projectVideo.style.display = 'none';
    projectImage.style.display = 'none';
};

// Event listener for clicking on project cards
projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Prevent opening the modal if clicking on the GitHub link within the card
        if (e.target.closest('.projects__button') || e.target.closest('.projects__link')) {
            return;
        }

        const projectKey = card.getAttribute('data-project');
        if (projectKey){
            openProjectModal(projectKey);
        }
    });
});

// Event listener for closing the modal via the close button
projectModalClose.addEventListener('click', closeProjectModal);

// Event listener for closing the modal by clicking outside
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeProjectModal();
    }
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
  e.preventDefault()

  const submitButton = document.querySelector('.contact__button')
    
	// Disable the button to prevent multiple clicks
	submitButton.textContent = 'Sending...'
	submitButton.disabled = true

	// serviceID - templateID - #form - publicKey
	emailjs.sendForm('service_mwzx5mu','template_b00duvq','#contact-form','e53ZOSj0_XEzvgUcA')
		.then(() =>{
			// Show sent message
			submitButton.textContent = 'Send Message'
			contactMessage.textContent = 'Message sent successfully ✅'
			// Remove message after five seconds
			setTimeout(() =>{
				contactMessage.textContent = ''
			}, 5000)
			// Clear input fields
			contactForm.reset()

		}, () =>{
			// Show error message
			contactMessage.textContent = 'Message not sent (service error) ❌'
		}).finally(() => {
			// Re-enable the button
			submitButton.disabled = false
		})
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Animations repeat
 })

 sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin: 'right'})
 sr.reveal(`.home__name, .home__info, 
            .about__container .section__title-1, .about__info, 
            .contact__social, .contact__data`, {origin: 'left'})
 sr.reveal(`.services__card, .projects__card`, {interval: 100})

window.addEventListener("mousedown", () => {
    cursorOutline.classList.add("shrunk");
});

window.addEventListener("mouseup", () => {
    cursorOutline.classList.remove("shrunk");
});