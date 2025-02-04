import './Projects.css';
import yoga_studio from '../../assets/images/yoga-studio-logo.png'
import hi_fi from '../../assets/images/hi-fi-logo.png'
import aniRate from '../../assets/images/AniRate.png'

const Projects = () => {




    return (
        
        <div className='projects-section'>
          
          <div className="projects">

            <div className='project'>
              
              <div className='project-image'>
                <a href='https://anime-rate.netlify.app/' target='_blank' rel="noreferrer">
                <img src={aniRate} alt="Scared anime kid" />
                </a>
                <p>Anime Watchlist and Rating Website</p>

                <div className="project-tech-stack">
                  <p>
                    <strong>Dependencies & Tech Stack:</strong><br></br>
                    <i>React, Figma, Git & Github, Javascript, CSS, HTML</i>
                    
                  </p>
                </div>
              </div>
              
            </div>

            <div className='project'>
              
              <div className='project-image'>
                <a href='https://hi-fi-wineandspirits.netlify.app' target='_blank' rel="noreferrer">
                <img src={hi_fi} alt='logo of Hi-Fi Wine and Spirits'/>
                </a>
                <p>An artisan Wine & Spirits company.</p>

                <div className="project-tech-stack">
                  <p>
                    <strong>Dependencies & Tech Stack:</strong><br></br>
                    <i>Figma, Git/Github, Javascript, CSS, HTML</i>
                  </p>
                </div>
              </div>
              
            </div>
            

            
            <div className='project'>
              
              <div className='project-image'>
                <a href='https://wilcoyogastudio.netlify.app' target='_blank' rel="noreferrer">
                <img src={yoga_studio} alt="Dock going in lake" />
                </a>
                <p>Demo: A San Francisco-based Yoga Studio</p>

                <div className="project-tech-stack">
                  <p>
                    <strong>Dependencies & Tech Stack:</strong><br></br>
                    <i>Figma, Git/Github, Javascript, CSS, HTML</i>
                    
                  </p>
                </div>
              </div>
              
            </div>

            
           
            
          </div>
            

            

        </div>

       
    );
}

export default Projects