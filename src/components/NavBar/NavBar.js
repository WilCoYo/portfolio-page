import React, {useRef, useEffect} from 'react'
import './NavBar.css'
import { useNavigate, useLocation } from 'react-router-dom';
// import resume from '../../assets/files/Yonkin, Cody W. Resume.pdf'




function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    const btnsRef = useRef(null);
    const indicatorRef = useRef(null);

    
    const isActive = (route) => {
        if(route === '/' && location.pathname !== '/') {
            return false;
        }

        return location.pathname === route ||
            (route !== '/' && location.pathname.startsWith(route));
    };

    const handleNavigation = (route) => {
        navigate(route);
    }

// Initial positioning - runs once on mount
useEffect(() => {
    if(!btnsRef.current || !indicatorRef.current) return;
    
    // Set initial styles without transition
    indicatorRef.current.style.transition = 'none';
    
    updateIndicatorPosition();
    
    // Force reflow
    void indicatorRef.current.offsetWidth;
    
    // Re-enable transitions after initial positioning
    setTimeout(() => {
        indicatorRef.current.style.transition = 'left 0.4s cubic-bezier(0.16, 1, 0.3, 1), width 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    }, 50);
    // eslint-disable-next-line
}, []); // Empty array means this runs once on mount



// Update indicator position when route changes
useEffect(() => {
    if(!btnsRef.current || !indicatorRef.current) return;
    // eslint-disable-next-line
    updateIndicatorPosition();
    // eslint-disable-next-line
}, [location.pathname]); // This will run when pathname changes
  



// Helper function to update indicator position
const updateIndicatorPosition = () => {
    let activeButton;
    if (isActive('/')) {
        activeButton = homeRef.current;
    } else if (isActive('/about')) {
        activeButton = aboutRef.current;
    } else if (isActive('/experience')) {
        activeButton = experienceRef.current;
    } else if (isActive('/projects')) {
        activeButton = projectsRef.current;
    }

    if (activeButton) {
        const containerRect = btnsRef.current.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        
        // Calculate position relative to container
        const left = buttonRect.left - containerRect.left;
        
        // Update indicator position and width
        indicatorRef.current.style.left = `${left}px`;
        indicatorRef.current.style.width = `${buttonRect.width}px`;
    }
};


    return (
        <div className='navbar'>
            
                <div className='btns' ref={btnsRef}>
                    <div className='nav-indicator' ref={indicatorRef}></div>

                        <button  
                            ref={homeRef}
                            onClick={() => handleNavigation('/')}
                            className={`btn btn1 ${isActive('/') ? 'outline' : ''}`}>
                            Home
                        </button>
                    
                        <button 
                            ref={aboutRef}
                            onClick={() => handleNavigation('/about')}
                            className={`btn btn2 ${isActive('/about') ? 'outline' : ''}`}>
                            
                            About
                        </button>
                                  
                        <button
                            ref={experienceRef}
                            onClick={() => handleNavigation('/experience')}
                            className={`btn btn3 ${isActive('/experience') ? 'outline' : ''}`}>
                            Experience
                        </button>
                    
                        <button 
                            ref={projectsRef}
                            onClick={() => handleNavigation('/projects')}
                            className={`btn btn4 ${isActive('/projects') ? 'outline' : ''}`}>
                            Projects
                        </button>
                   
                  

                
                 
                </div>


        </div>
    )
}

export default NavBar