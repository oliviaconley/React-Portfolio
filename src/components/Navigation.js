import React from 'react';

export default function Navigation({ currentPage, handlePageChange }) {
    return(
        <ul>
            <li>
                <a href="#about"
                onClick={() => handlePageChange('About')}>
                About
                </a>
            </li>
            <li>
                <a href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}>
                Portfolio
                </a>
            </li>
            <li>
                <a href="#contact"
                onClick={() => handlePageChange('Contact')}>
                Contact
                </a>
            </li>
            <li>
                <a href="#resume"
                onClick={() => handlePageChange('Resume')}>
                Resume
                </a>
            </li>
        </ul>
    )
}
