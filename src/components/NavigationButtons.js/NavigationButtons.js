import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigationButtons.css';
import download_icon from '../../assets/images/download_icon.svg'
import resume from '../../assets/files/Yonkin, Cody W. Resume.pdf'


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
                href= {resume}
                target='_blank'
                rel="noreferrer"
                download
                >
                <p 
                id='resume-word'
                >
                Resume
                </p>
                <img src={download_icon} className="download-icon" alt='download icon'/>
                </a>
            </button>
        </nav>
    )
}

export default NavigationButtons;