import React from 'react';
import './Experience.css'
import codecademy_logo from '../../assets/images/Codecademy-logo.png'
import cy_logo from '../../assets/images/Cityyear-logo.png';
import nccc_logo from '../../assets/images/NCCC-logo.png'





 const Experience = () => {


  
    

      return (
        <div className='experience-section' id='vanta'>
          <div className='experience-section-bg'>

            <div className='tech-stack-certs'>

              <div className='certs'> 

                <ul className='codecademy'>
                  <img src={codecademy_logo} className="codecademy-logo" alt="Codecademy Logo" />
                  <li>Full-Stack Engineer Professional certification</li>
                  <li>Front End Engineer Professional certification</li>
                </ul>

                <ul className='americorps'>
                  <img src={cy_logo} className="cityyear-logo" alt="City Year Logo" />
                  <img src={nccc_logo} className="NCCC-logo" alt="AmeriCorps NCCC Logo" />
                  <li>Americorps National Civilian Corps (NCCC)</li>
                  <li>AmeriCorps City Year, Chicago</li>
                </ul>
              </div>
              
              <div className='tech-stack'> 
                <section>
                <h4 className='skills-title'>Skills</h4>
                <p>
                  <strong>Proficient:</strong> HTML, CSS, JavaScript, VSCode, React, Node.js, Express.js, PostgreSQL,<br></br> SQL, Git, GitHub, 
                  PgAdmin 4, Postbird, Postman, Figma, Netlify, Canva 
                  <br></br>
                  <br></br>
                  <strong>Knowledgeable: </strong> NoSQL, MongoDB, Railway.app, Docker. Python, C++, Unity
                </p>
                </section>
              </div>

            
            
            
          </div>




            <div className='work-experience'>

              <ul className='codeNinjas cell'>
                  <h2>Code Ninjas</h2>
                  <h4>Code Instructor</h4>
                  <li>Guided learners to aid understanding and knowledge of technology and coding concepts</li>
                  <li>Taught JavaScript, Python, and C+ fundamentals using Impact, Microsoft MakeCode, and Unity</li>
                  <li>Customized and supplement curricular materials to ensure knowledge transfer and growth</li>
                  <li>Leveraged educator background to inspire learners’ confidence in technology, math, and science</li>
              </ul>

              <ul className='apple cell'>
                  <h2>Apple</h2>
                  <h4>Technical Expert</h4>
                  <li>Interpreted customer concerns and delivered appropriate product diagnoses and solutions</li>
                  <li>Flexibly rotated through multiple technical specialties and skill sets with ease and confidence</li>
                  <li>Translated technical knowledge via Apple iOS hardware and software technician certification</li>
                  <li>Troubleshot device issues with customers and communicated appropriate solutions</li>
                </ul>

                <ul className='PICS cell'>
                  <h2>PICS ITECH</h2>
                  <h4>Client Account Manager</h4>
                  <li>Managed CRM account data and quickly resolved service tickets queue for 60+ clients</li>
                  <li>Collaborated with clients to understand their business objectives and technical requirements</li>
                  <li>Liaised between clients and technical teams, facilitating communication and understanding</li>
                  <li>Collaborated with internal and external partners to drive projects from onboarding through closure</li>
                </ul>

              
            </div>


         

          </div>
        </div>
        
      )


 }

 export default Experience