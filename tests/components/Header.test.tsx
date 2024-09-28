import {it, describe, vi, expect, beforeEach} from 'vitest';
import Header from '../../src/components/Header';
import {render, screen} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';

// Mocking scrollToSection and scrollToTop utilities
vi.mock('../../src/utilities/Scroll', () => ({
    scrollToTop: vi.fn(),
    scrollToSection: vi.fn(),
  }));

import {scrollToTop, scrollToSection} from '../../src/utilities/Scroll';

describe('Header', () => {
    let user;

    // Set up userEvent globally
    beforeEach(() => {
        user = userEvent.setup();
    });
    it ('renders the header', () => {
        render(<Header />);
        const name = screen.getByText('AYUSH PATEL');
        expect(name).toBeInTheDocument();

        const home = screen.getByText('Home');
        expect(home).toBeInTheDocument();

        const about = screen.getByText('About');
        expect(about).toBeInTheDocument();

        const experience = screen.getByText('Experience');
        expect(experience).toBeInTheDocument();

        const projects = screen.getByText('Projects');
        expect(projects).toBeInTheDocument();

        const contact = screen.getByText('Contact');
        expect(contact).toBeInTheDocument();
    });

    it ('scrolls to top when logo is clicked', async () => {
        const logo = screen.getByText('AYUSH PATEL');
        await user.click(logo);
        expect(window.scrollY).toBe(0);
        expect(scrollToTop).toHaveBeenCalled();
    });

    it ('scrolls to top when home is clicked', async () => {
        const home = screen.getByText('Home');
        await user.click(home);
        expect(window.scrollY).toBe(0);
        expect(scrollToTop).toHaveBeenCalled();
    });

    it('scrolls to "About" section when about link is clicked', async () => {
        const about = screen.getByText('About');
        await user.click(about);
        expect(scrollToSection).toHaveBeenCalledWith('about');
      });

      it ('scrolls to "Experience" section when experience link is clicked', async () => {
        const experience = screen.getByText('Experience');
        await user.click(experience);
        expect(scrollToSection).toHaveBeenCalledWith('experience');
      });
    
      it('scrolls to "Projects" section when projects link is clicked', async () => {
        const projects = screen.getByText('Projects');
        await user.click(projects);
        expect(scrollToSection).toHaveBeenCalledWith('projects');
      });
    
      it('scrolls to "Contact" section when contact link is clicked', async () => {
        const contact = screen.getByText('Contact');
        await user.click(contact);
        expect(scrollToSection).toHaveBeenCalledWith('contact');
      });
});