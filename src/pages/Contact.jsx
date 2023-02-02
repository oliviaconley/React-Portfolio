import React from 'react';
import LinkedInWhite from '../images/LinkedInWhite.png';
import GitHubWhite from '../images/GitHubWhite.png';

export default function Contact() {
    return (
      <section id="contact">

        <div className="flex flex-cols-2 flex-wrap text-center w-full pb-10 justify-center">
          <div className='mt-48'>

          <div className='m-2 p-6 rounded-full border-2 border-white bg-black'>
            <img className='w-10 h-10 ml-4' src={LinkedInWhite} alt="LinkedIn"></img>
            <a className='text-white' href="https://www.linkedin.com/in/olivia-conley/" target="_blank">LinkedIn</a>
          </div>

          <div className='m-2 p-6 rounded-full border-2 border-white bg-black'>
            <img className='w-10 h-10 ml-4' src={GitHubWhite} alt="LinkedIn"></img>
            <a className='text-white'  href="https://github.com/oliviaconley" target="_blank">GitHub</a>
          </div>

          </div>

          <form className='m-4' target="_blank" action="https://formsubmit.co/oliviarconley@gmail.com" method="POST">
          <div className="text-2xl pt-24">Contact Me</div>
          <p className='text-sm py-2'>Shoot me an email</p> 
            <div>
              <div>
                <div className="p-2 pt-6">
                  <input type="text" name="name" className="rounded-lg max-w-full w-96 border-black border" placeholder="Full Name" required/>
                </div>
                <div className="p-2 center">
                  <input type="email" name="email" className="rounded-lg max-w-full w-96 border-black border mb-2" placeholder="Email Address" required/>
                </div>
              </div>
            </div>
            
            <div>
              <textarea placeholder="Your Message" className="rounded-lg p-2 mx-w-full w-96 border-black border" name="message" rows="10" required></textarea>
            </div>
            <button className='transition ease-in-out delay-150 bg-black text-white hover:-translate-y-1 hover:scale-100 duration-300 rounded-full py-2 px-4 m-4' type="submit">Send</button>
          </form>
        </div>
      </section>
    );
  }