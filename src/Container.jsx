// import React, { useState } from 'react';
// import Navigation from './Navigation';
// import About from './components/pages/About';
// import Portfolio from './components/pages/Portfolio'; 
// import Contact from './components/pages/Contact'; 
// import Resume from './components/pages/Resume'; 
// import Footer from './components/pages/Footer';

// //checking to see what the value of `currentPage` is
// export default function Container() {
//     const [currentPage, setCurrentPage] = useState('About');

//     const renderPage = () => {
//         if (currentPage === 'About') {
//           return <About />;
//         }
//         if (currentPage === 'Portfolio') {
//           return <Portfolio />;
//         }
//         if (currentPage === 'Contact') {
//           return <Contact />;
//         }
//         return <Resume />;
//       };

// const handlePageChange = (page) => setCurrentPage(page); //updating the current page value

// return (
//     <div>
//     {/* We are passing the currentPage from state and the function to update it */}
//     <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
//     {/* Here we are calling the renderPage method which will return a component  */}
//     {renderPage()}
//     <Footer/>
//   </div>
//   );
// }