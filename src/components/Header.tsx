import './Header.css';
import {scrollToTop, scrollToSection} from '../utilities/Scroll';

// @ts-ignore
import React from 'react';

function Header(){

    return (
        <div className="header">
            <div className="logo-container" onClick={() => scrollToTop()}>
                <span className="header-logo-name">
                    AYUSH PATEL
                </span>
            </div>
            <div className="tab-section">
                <ul className="header-links">
                    <li className="header-link-wrapper" onClick={() => scrollToTop()}>
                        <a className="header-link">Home</a>
                    </li>
                    <li className="header-link-wrapper" onClick={() => scrollToSection('about')}>
                        <a className="header-link">About</a>
                    </li>
                    <li className="header-link-wrapper" onClick={() => scrollToSection('projects')}>
                        <a className="header-link">Projects</a>
                    </li>
                    <li className="header-link-wrapper" onClick={() => scrollToSection('contact')}>
                        <a className="header-link">Contact</a>
                    </li>
    
                </ul>
            </div>
        </div>
    );
}

export default Header;