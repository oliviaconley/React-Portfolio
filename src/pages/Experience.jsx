import React from 'react';
import ResumeDownload from '../components/ResumeDownload';

export default function Experience() {
    return (
      <section className='text-center' id="experience">
          <p className='text-2xl pt-20 pb-2'>Experience</p> 
          <p className='text-sm pb-12'>Check out my skills</p> 
          <ResumeDownload/>

        <div className='flex flex-cols-2 flex-wrap place-content-center'>

          <div className=''>
            <p className='pb-4'>Developer</p> 
            <ul className='text-left max-w-96 p-16 px-24 mr-8 rounded-full border-black border-2 bg-white'>
              <li>✔️ HTML5 / CSS3</li>
              <li>✔️ JavaScript</li>
              <li>✔️ Git</li>
              <li>✔️ Node.js</li>
              <li>✔️ React</li>
              <li>✔️ Express.js</li>
              <li>✔️ jQuery</li>
              <li>✔️ Bootstrap / Tailwind</li>
              <li>✔️ Handlebars.js </li>
              <li>✔️ MySQL</li>
              <li>✔️ MongoDB</li>
            </ul>
          </div>

          <div className='relative'>
            <p className='pb-4'>Producer</p> 
            <ul className='text-left text-white max-w-96 p-20 py-24 ml-8 rounded-full border-white border-2 bg-black'>
              <li>✔️ Project Management</li>
              <li>✔️ Multimedia Production</li>
              <li>✔️ Product Development</li>
              <li>✔️ Client Relations</li>
              <li>✔️ Creative Problem-Solving</li>
              <li>✔️ Writing</li>
              <li>✔️ Editing</li>
              <li>✔️ Strategy</li>
              <li>✔️ Budgeting</li>
            </ul>
          </div>

        </div>
      </section>
    );
  }