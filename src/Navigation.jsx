import React from 'react';

export default function Navigation({ currentPage, handlePageChange }) {
    return(
        <div className="hidden md:block w-full fixed">
        <ul className="flex flex-col w-full p-4 mt-4 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm text-white md:font-medium md:border-0 md:bg-black">
            <li>
                <a href="#about"
                onClick={() => handlePageChange('About')}>
                About
                </a>
            </li>
            <li>
                <a href="#experience"
                onClick={() => handlePageChange('Experience')}>
                Experience
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
        </ul>
        </div>
    )
}
