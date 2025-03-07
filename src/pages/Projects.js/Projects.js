import './Projects.css';
import hi_fi from '../../assets/images/hi-fi-logo.png'
import aniRate from '../../assets/images/AniRate.png'
import scholarBase from '../../assets/images/scholarBaseImg.png'

const Projects = () => {




    return (
        
        <div className='projects-section'>
          
          <div className="projects">

            <div className='project'>
              
              <div className='project-image'>
                <a href='https://anime-rate.netlify.app/' target='_blank' rel="noreferrer">
                <img src={aniRate} alt="Scared anime kid" />
                </a>
              </div>

              <div className="project-tech-stack">
                <h3>Anime Watchlist and Rating Website</h3>
                <p>Has full login and credential functionality, including custom watchlists and profiles.</p>
                <p>
                  <strong>Dependencies & Tech Stack:</strong><br></br>
                  <i>React, Firebase, Figma, Git & Github, Javascript, CSS, HTML</i>
                </p>
              </div>
              
              
            </div>

            <div className='project'>
              
              <div className='project-image'>
                <a href='https://hi-fi-wineandspirits.netlify.app' target='_blank' rel="noreferrer">
                <img src={hi_fi} alt='logo of Hi-Fi Wine and Spirits'/>
                </a>
              </div>
              <div className="project-tech-stack">
                <h3>An artisan Wine & Spirits company.</h3>
                <p>Made completely with vanilla HTML, CSS, and JavaScript. There are no frameworks and dependencies used.</p>
                <p>
                  <strong>Dependencies & Tech Stack:</strong><br></br>
                  <i>Figma, Git/Github, Javascript, CSS, HTML</i>
                </p>
              </div>
              
              
            </div>
            

            
            <div className='project'>
              
              <div className='project-image'>
                <a href='https://scholarbase-production.up.railway.app' target='_blank' rel="noreferrer">
                <img src={scholarBase} alt="scholarBase search engine" />
                </a>
                

                
              </div>
              <div className="project-tech-stack">
                <h3>Scholarly article database for a more streamlined research experience.</h3>
                <p>Full MERN stack search engine. Database is hosted through MongoDB and hosted through railway.app</p>
                <p>
                  <strong>Dependencies & Tech Stack:</strong><br></br>
                  <i>React, Javascript, CSS, HTML, Express.js, MongoDB, Railway, Git/Github</i>
                  
                </p>
              </div>
              
            </div>

            
           
            
          </div>
            

            

        </div>

       
    );
}

export default Projects