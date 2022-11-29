import React from 'react';
import '../styles/About.css';
import Headshot from '../images/Headshot.jpg'

const styles = {
  aboutStyles: {
    background: '#e3f2c3',
  },
};

export default function About() {
    return (
      <div style={styles.aboutStyles}>
        <h1>Who am I?</h1>
        <img className="headshot" src={Headshot} alt = "Headshot"></img>
        <p>
        Full-stack web developer with expertise in multimedia production.</p>
        <p>An agile self-starter who gets the tough stuff done.</p>
        <p>A confident leader with a passion for learning and team-building.</p>
        <p>A master collaborator with a strong perspective.
        </p>
        <p>Sharp eye for detail and creative problem-solving.</p>
      </div>
    );
  }