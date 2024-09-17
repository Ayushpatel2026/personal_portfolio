import {it, expect, describe, vi} from 'vitest';

import Header from '../../src/components/Header';
import {render, screen} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest';

// Mocking scrollToSection and scrollToTop utilities
vi.mock('../../src/utilities/Scroll', () => ({
    scrollToTop: vi.fn(),
    scrollToSection: vi.fn(),
  }));

import {scrollToTop, scrollToSection} from '../../src/utilities/Scroll';

describe('Header', () => {
    it ('renders the header', () => {
        render(<Header />);
        const name = screen.getByText('AYUSH PATEL');
        expect(name).toBeInTheDocument();

        const home = screen.getByText('Home');
        expect(home).toBeInTheDocument();

        const about = screen.getByText('About');
        expect(about).toBeInTheDocument();

        const projects = screen.getByText('Projects');
        expect(projects).toBeInTheDocument();

        const contact = screen.getByText('Contact');
        expect(contact).toBeInTheDocument();
    });

    it ('scrolls to top when logo is clicked', () => {
        const logo = screen.getByText('AYUSH PATEL');
        logo.click();
        expect(window.scrollY).toBe(0);
        expect(scrollToTop).toHaveBeenCalled();
    });

    it ('scrolls to top when home is clicked', () => {
        const home = screen.getByText('Home');
        home.click();
        expect(window.scrollY).toBe(0);
        expect(scrollToTop).toHaveBeenCalled();
    });

    it('scrolls to "About" section when about link is clicked', () => {
        const about = screen.getByText('About');
        about.click();
        expect(scrollToSection).toHaveBeenCalledWith('about');
      });
    
      it('scrolls to "Projects" section when projects link is clicked', () => {
        const projects = screen.getByText('Projects');
        projects.click();
        expect(scrollToSection).toHaveBeenCalledWith('projects');
      });
    
      it('scrolls to "Contact" section when contact link is clicked', () => {
        const contact = screen.getByText('Contact');
        contact.click();
        expect(scrollToSection).toHaveBeenCalledWith('contact');
      });
});