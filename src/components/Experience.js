import React, { useEffect, useRef, useState } from 'react';
import WAVES from 'vanta/src/vanta.waves'




 const Experience = () => {
    useEffect(()=>{
        WAVES({
          el: "#vanta",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00
        })
      }, [])

      return (
        <div className='experience-section' id='vanta'>
          <div className='experience-column-left column'>
            
            <div className='tech-stack'>
              
              <section>
              <h4 className='skills-title'>Skills</h4>
              <p>
                <strong>Proficient:</strong> HTML, CSS, JavaScript, VSCode, React, Node.js, Express.js, PostgreSQL,<br></br> SQL, Git, GitHub, 
                PgAdmin 4, Postbird, Postman, Figma, Netlify, Canva 
                <br></br>
                <strong>Knowledgeable: </strong> NoSQL, MongoDB, Railway.app, Docker. Python, C++, Unity
              </p>
              </section>
             

              
            </div>




            
            <ul className='codecademy'>
              <img src="/Codecademy-logo.png" className="codecademy-logo" alt="Codecademy Logo" />
              <li>Full-Stack Engineer Professional certification</li>
              <li>Front End Engineer Professional certification</li>
            </ul>

            <ul className='americorps'>
              <img src="/Cityyear-logo.png" className="cityyear-logo" alt="City Year Logo" />
              <img src="/NCCC-logo.svg" className="NCCC-logo" alt="AmeriCorps NCCC Logo" />
              <li>Americorps National Civilian Corps (NCCC)</li>
              <li>AmeriCorps City Year, Chicago</li>
            </ul>


            
          
            

          </div>

          <div className='experience-column-right column'>

          <ul className='codeNinjas'>
              <h2>Code Ninjas</h2>
              <h4>Code Instructor</h4>
              <li>Guided learners to aid understanding and knowledge of technology and coding concepts</li>
              <li>Taught JavaScript, Python, and C+ fundamentals using Impact, Microsoft MakeCode, and Unity</li>
              <li>Customized and supplement curricular materials to ensure knowledge transfer and growth</li>
              <li>Leveraged educator background to inspire learners’ confidence in technology, math, and science</li>
          </ul>

          <ul className='apple'>
              <h2>Apple</h2>
              <h4>Technical Expert</h4>
              <li>Interpreted customer concerns and delivered appropriate product diagnoses and solutions</li>
              <li>Flexibly rotated through multiple technical specialties and skill sets with ease and confidence</li>
              <li>Translated technical knowledge via Apple iOS hardware and software technician certification</li>
              <li>Troubleshot device issues with customers and communicated appropriate solutions</li>
              <li>Trained new employees on software and hardware troubleshooting and company values</li>
            </ul>

            <ul className='PICS'>
              <h2>PICS ITECH</h2>
              <h4>Client Account Manager</h4>
              <li>Managed CRM account data and quickly resolved service tickets queue for 60+ clients</li>
              <li>Collaborated with clients to understand their business objectives and technical requirements</li>
              <li>Liaised between clients and technical teams, facilitating communication and understanding</li>
              <li>Collaborated with internal and external partners to drive projects from onboarding through closure</li>
            </ul>
          
           
          </div>
        </div>
        
      )


 }

 export default Experience