import React from 'react';
import '../styles/Footer.css'; 
import Email from '../images/Email.png';
import LinkedIn from '../images/LinkedIn.png';
import GitHub from '../images/GitHub.png';

export default function Footer() {
  return (
    <div className="contact">
      <a href="https://www.linkedin.com/in/olivia-conley/" target="_blank"><img className="linkedin" src={LinkedIn} alt="LinkedIn"/></a>
      <a href="https://github.com/oliviaconley" target="_blank"><img className="github" src={GitHub} alt="GitHub"/></a>
      <a href="#Contact"><img className="email" src={Email} alt="Email"/></a>
    </div>
  );
}

