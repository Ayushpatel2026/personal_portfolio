
export const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const scrollToSection = (id: string) => {
    console.log("Scrolling to section: ", id);
    const element = document.getElementById(id);
    if (element) { // Check if element is not null
        const yOffset = -75; // this value is the header height
        const yPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;
        console.log(yPosition);

        window.scrollTo({ top: yPosition, behavior: 'smooth' });
    } else {
        console.warn(`Element with id '${id}' not found.`);
    }
};

export const scrollForSkills = (id: string) => {
    console.log("Scrolling to section: ", id);
    const element = document.getElementById(id);
    if (element) { // Check if element is not null
        const yPosition = element.getBoundingClientRect().top + window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Calculate position to center the section on the page
        const yOffset = yPosition - (windowHeight / 2) + (element.offsetHeight / 2);

        window.scrollTo({ top: yOffset, behavior: 'smooth' });
    } else {
        console.warn(`Element with id '${id}' not found.`);
    }
};