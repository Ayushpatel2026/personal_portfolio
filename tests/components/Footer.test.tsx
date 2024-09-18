import {it, describe, vi, expect, beforeEach, afterAll, afterEach} from 'vitest';
import Footer from '../../src/components/Footer';
import {cleanup, render, screen, within} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';
import {scrollToTop} from '../../src/utilities/Scroll';

// Mocking scrollToTop utility
vi.mock('../../src/utilities/Scroll', () => ({
    scrollToTop: vi.fn(),
  }));


describe('Footer', () => {

    afterEach(() => {
        cleanup();
    });
    
    const currentYear = new Date().getFullYear();

    it ('should render the footer properly', () => {
        render(<Footer />);

        // Check if the footer description is rendered
        const descriptionElement = screen.getByText('Software Engineering Student at McMaster University');
        expect(descriptionElement).toBeInTheDocument();

        // Check if the social links are present
        const linkedinLink = screen.getByAltText('linkedin');
        const githubLink = screen.getByAltText('github');
        expect(linkedinLink).toBeInTheDocument();
        expect(githubLink).toBeInTheDocument();

        // Check if the current year is correct in the footer
        const copyrightText = screen.getByText(`© Copyright ${currentYear}, Made by`);
        expect(copyrightText).toBeInTheDocument();
    });

    it ('scrolls to top when name is clicked', async () => {
        render(<Footer />);
        const footerBottom = screen.getByText(/Made by/i).closest('div');
        const nameLink = within(footerBottom!).getByText('Ayush Patel');
        const user = userEvent.setup();
        await user.click(nameLink);
        expect(window.scrollY).toBe(0);
        expect(scrollToTop).toHaveBeenCalled();
    });
});