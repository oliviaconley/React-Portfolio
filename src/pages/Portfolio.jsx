import React from 'react';
import Veriti from '../images/Veriti.png'; 
import Polished from '../images/Polished.png';
import Planner from '../images/Planner.jpg';

const data = [
    {
        id: 1,
        image: Veriti, 
        title: "Veriti", 
        github: "https://github.com/oliviaconley/veriti", 
        site: "https://veriti-app.herokuapp.com/"
    }, 
    {
        id: 2,
        image: Polished, 
        title: "Polished", 
        github: "https://github.com/oliviaconley/Polished", 
        site: "https://polished-booking-app.herokuapp.com/"
    },
    {
      id: 3,
      image: Planner, 
      title: "Daily Planner", 
      github: "https://github.com/oliviaconley/Work-Scheduler-080822", 
      site: "https://oliviaconley.github.io/Work-Scheduler-080822/"
  }
]

export default function Portfolio() {
    return (
        <div>
            <p className='text-center text-2xl py-24'>My Work</p> 

            <div className='flex flex-row flex-wrap'>
            {data.map(({ id, image, title, github, site }) => {
                return (
            <div key={id} className='m-8 p-8 border-black border-2 rounded-3xl bg-white'>
              <div className='flex flex-col'>
                <img className='max-w-full w-60 h-45 rounded-2xl' src={image} alt={title} />
              
              <h3 className='py-2'>{title}</h3>

              <div className=''>
                <a
                  href={github}
                  className='transition ease-in-out delay-150 bg-black text-white hover:-translate-y-1 hover:scale-100 duration-300 rounded-full py-2 px-4 mr-4'
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href={site}
                  className='transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-100 duration-300 rounded-full py-2 px-4'
                  target="_blank"
                >
                  Live Site
                </a>
              </div>
              </div>
            </div>
                ); 
            })}
            </div>
        </div>
    );
}