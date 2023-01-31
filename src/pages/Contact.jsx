import React from 'react';
import LinkedIn from '../images/LinkedIn.png';
import GitHub from '../images/GitHub.png';

export default function Contact() {
    return (
      <div>

        <div className="flex flex-cols-2 flex-wrap text-center w-full pb-10">
          <div className='flex-col'>

          <div className='p-4 rounded-full border-2 border-black'>
            <img className='w-10 h-10' src={LinkedIn} alt="LinkedIn"></img>
            <div>LinkedIn</div>
            <div className='text-xs'>Let's connect</div>
          </div>

          <div className='p-4 rounded-full border-2 border-black'>
            <img className='w-10 h-10' src={GitHub} alt="LinkedIn"></img>
            <div>GitHub</div>
            <div className='text-xs'>Let's connect</div>
          </div>

          </div>
          <div className="text-2xl pt-20">Contact Me</div>
          <form className='m-4' target="_blank" action="https://formsubmit.co/oliviarconley@gmail.com" method="POST">
            <div>
              <div>
                <div className="p-2 pt-6">
                  <input type="text" name="name" className="rounded-lg max-w-full w-96 border-black border-2" placeholder="Full Name" required/>
                </div>
                <div className="p-2">
                  <input type="email" name="email" className="rounded-lg max-w-full w-96 border-black border-2" placeholder="Email Address" required/>
                </div>
              </div>
            </div>
            
            <div>
              <textarea placeholder="Your Message" className="rounded-lg p-2 mx-w-full w-96 border-black border-2" name="message" rows="10" required></textarea>
            </div>
            <button className='transition ease-in-out delay-150 bg-black text-white hover:-translate-y-1 hover:scale-100 duration-300 rounded-full py-2 px-4 m-4' type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }