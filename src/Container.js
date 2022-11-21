import React, { useState } from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio'; 
import Contact from './pages/Contact'; 
import Resume from './pages/Resume'; 
//what about header and footer....? No i dont thnk so 

//Tchecking to see what the value of `currentPage` is
export default function Container() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Contact') {
          return <Contact />;
        }
        return <Resume />;
      };

const handlePageChange = (page) => setCurrentPage(page); //updating the current page value

return (
    <div>
    {/* We are passing the currentPage from state and the function to update it */}
    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    {/* Here we are calling the renderPage method which will return a component  */}
    {renderPage()}
  </div>
  );
}