import {it, describe, expect, afterEach} from 'vitest';
import {cleanup, render, screen} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest';

import Projects from '../../src/components/Project';


describe ("Project Component", () => {

    afterEach(() => {
        cleanup();
    });

    const mockProjectNoWebsite = {
        projectTitle: 'Test Project',
        projectDescription: 'Test Description',
        gitHubLink: 'https://github.com/example',
    }

    const mockProjectWithWebsite = {
        projectTitle: 'Test Project',
        projectDescription: 'Test Description',
        gitHubLink: 'https://github.com/example',
        websiteLink: 'https://example.com',
    }

    it ('should render the project details properly', () => {
        render(<Projects {...mockProjectNoWebsite} />);

        const title = screen.getByText('Test Project');
        expect(title).toBeInTheDocument();

        const description = screen.getByText('Test Description');
        expect(description).toBeInTheDocument();

        const githubLink = screen.getByText('GitHub');
        expect(githubLink).toBeInTheDocument();
        expect(githubLink).toHaveAttribute('href', 'https://github.com/example');
        expect(githubLink).toHaveAttribute('target', '_blank');

        const deployedAppLink = screen.queryByText('Deployed App');
        expect(deployedAppLink).toBeNull();
    });

    it('renders the website link when provided', () => {
        render(<Projects {...mockProjectWithWebsite} />);
        
        // Check if the website link renders when it is provided
        const websiteLink = screen.getByText('Deployed App');
        expect(websiteLink).toBeInTheDocument();
        expect(websiteLink).toHaveAttribute('href', 'https://example.com');
        expect(websiteLink).toHaveAttribute('target', '_blank');
    });
});