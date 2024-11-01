import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationButtons = () => {
    const navigate = useNavigate();

 
  
    return (
        <nav className='btns'>

            <button 
                onClick={() => navigate('/')}
                className='btn btn1'
            >
            Home
            </button>

            <button 
                onClick={() => navigate('/about')}
                className='btn btn2'
            >
            About
            </button>

            <button
                onClick={() => navigate('/experience')}
                className='btn btn3'
            >
            Experience
            </button>

            <button 
                onClick={() => navigate('/projects')}
                className='btn btn4'
            >
            Projects
            </button>

            
            <button  
                className='btn btn5'
                >

                <a 
                href='/Yonkin, Cody W. Resume.pdf'
                target='_blank'
                download
                >
                <p 
                id='resume-word'
                >
                Resume
                </p>
                <span class="material-symbols-outlined">
                download
                </span>
                </a>
            </button>
            

        </nav>
    )
}

export default NavigationButtons;