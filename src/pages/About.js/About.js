import React from 'react';
import './About.css';
import selfie from '../../assets/images/SelfiePNG.png'


const About = () => {


    
    
    
    
    
      return (
        <div className="about-section" id="vanta">
          <div className='about'>
            <img src={selfie} className="selfie" alt="Selfie of Cody Yonkin" />
            <p className='about-paragraph'>
            As a full-stack engineer, I strive to spread positive energy through my work in technology and education. 
            By inspiring learners with coding knowledge, empowering users through accessible tech solutions, and fostering 
            clear communication between clients and technical teams, I aim to create connections that lead to positive 
            outcomes.<br></br><br></br>
            My commitment to continuous learning, highlighted by my completion of Codeacademy certifications, 
            enables me to stay at the forefront of ever-changing technology. By leveraging my diverse experiences in 
            team settings and project management, I champion collaboration and teamwork, combining my passion for 
            people and tech. Whether it's writing code, solving a problem, or helping someone, I'm confident my 
            experience can contribute greatly to your team.
            </p>
          </div>
            
        </div>
      );



}

export default About;