import React from 'react';
import Headshot from '../images/Headshot.jpg';
import Olivia from '../images/Olivia.jpg'; 
import Davidson from '../images/Davidson.png'; 
import ODK from '../images/ODK.jpeg'; 
import Fulbright from '../images/Fulbright.jpeg'; 
import ResumeDownload from '../components/ResumeDownload';
import Portfolio from './Portfolio'; 
import Experience from './Experience'; 
import Contact from './Contact'; 

export default function About() {
    return (
      <div className='flex flex-col flex-wrap justify-center items-center p-12'>
        <div className='text-center text-4xl py-10'>
          <p className='pb-4'>Hey y'all!</p>
          <p>I'm Olivia Conley</p> 
          <p className='text-sm'>Full Stack Developer · Producer</p> 
          </div>
        <img className="shadow rounded-full max-w-xs h-auto align-middle border-2 border-black" src={Headshot} alt = "Headshot"></img>
        <div className='flex flex-row p-8'>
          <div className='pr-8'>
            <ResumeDownload/>
          </div> 
          <div className='pl-8'>
          <button className='transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-100 duration-300 rounded-full py-2 px-4 border-black border'>Contact</button>
          </div>
        </div>

        <div className='flex flex-cols-2 flex-wrap p-24'>
            <div className='w-96'>
              <img className="rounded-full max-w-xs h-auto w-64 h-64 align-middle border-2 border-black" src={Olivia} alt = "Olivia"></img>
              
              <div className='max-w-xs h-auto w-16 h-16 align-middle'>
                <div className='py-4'>
                <img className='rounded-full float-left mr-4' src={Fulbright} alt= "Fulbright"></img>
                  <p className='w-96 pt-4'>Fulbright Scholar</p>
                  <p className='text-xs w-96'>Spain, 2020-2021</p>
                </div>

                <div className='py-4'>
                <img className='float-left mr-4' src={Davidson} alt= "Davidson"></img>
                  <p className='w-96 pt-4'>Presidential Scholar</p>
                  <p className='text-xs w-96'>Davidson College, 2016-2020</p>
                </div>

                <div className='py-4'>
                <img className='rounded-full float-left mr-4' src={ODK} alt= "ODK"></img>
                  <p className='w-96 pt-4'>Omicron Delta Kappa</p>
                  <p className='text-xs w-96'>Inductee, 2019</p>
                </div>
              </div>
            </div>

            <div className='w-96 px-4'>
              <p className='text-2xl py-4'>About Me</p> 
              <p className='py-2'><b>I am</b> a full-stack web developer with expertise in multimedia production.</p>
              <p className='py-2'><b>An agile self-starter</b> who gets the tough stuff done.</p>
              <p className='py-2'><b>A confident leader</b> with a passion for learning and team-building.</p>
              <p className='py-2'><b>A master collaborator</b> with a strong perspective.</p>
              <p className='py-2'><b>Sharp eye</b> for detail and creative problem-solving.</p>
              <p className='py-2'><b>Bilingual in English and Spanish</b>, I am always curious to learn from others.</p>
            </div>
        </div>

        <Experience/> 
        <Portfolio/>
        <Contact/>
      </div>
    );
  }