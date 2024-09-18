import {it, describe, expect, vi} from 'vitest';
import Home from '../../src/components/Home';
import {render, screen} from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest';
import {scrollToSection} from '../../src/utilities/Scroll';
import userEvent from '@testing-library/user-event';

vi.mock('../../src/utilities/Scroll', () => ({
    scrollToSection: vi.fn(),
  }));

describe('Home', () => {
    it("checks that project link scrolls to projects section", async () => {
        render(<Home />);
        const projectLink = screen.getByText('Projects');
        const user = userEvent.setup();
        await user.click(projectLink);
        expect(scrollToSection).toHaveBeenCalledWith('projects');
    });
});
