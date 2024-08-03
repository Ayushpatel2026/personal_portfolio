
export const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const scrollToSection = (id: string) => {
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