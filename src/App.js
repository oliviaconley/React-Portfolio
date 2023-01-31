import React, { useState } from 'react';
// import Container from "./Container";

import Navigation from './Navigation';
import About from './pages/About';
import Experience from './pages/Experience'; 
import Portfolio from './pages/Portfolio'; 
import Contact from './pages/Contact'; 
import Footer from './components/Footer';

const App = () => {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Experience') {
          return <Experience />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        return <Contact />;
      };

const handlePageChange = (page) => setCurrentPage(page);

return (
    <div className='bg-lime-100 font-mono'>
    {/* We are passing the currentPage from state and the function to update it */}
    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
     {/* Here we are calling the renderPage method which will return a component  */}
    {renderPage()}
    <Footer />
  </div>
  );
}

export default App;