import React, { useEffect } from 'react';
import WAVES from 'vanta/src/vanta.waves'


const About = () => {

  useEffect(()=>{
    WAVES({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x032222
    })
  }, [])

    
    
    
    
    
    
      return (
        <div className="about-section" id="vanta">
          <div className='about'>
            <img src="/SelfiePNG.png" className="selfie" alt="Selfie of Cody Yonkin" />
            <p className='about-paragraph'>
            As a full-stack engineer, I strive to spread positive energy through my work in technology and education. 
            By inspiring learners with coding knowledge, empowering users through accessible tech solutions, and fostering 
            clear communication between clients and technical teams, I aim to create connections that lead to positive 
            outcomes.
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