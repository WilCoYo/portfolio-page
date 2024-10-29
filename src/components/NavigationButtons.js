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
                className='btn btn1'
            >
            About
            </button>
            <button
                onClick={() => navigate('/experience')}
                className='btn btn1'
            >
            Experience
            </button>
            <button 
                onClick={() => navigate('/projects')}
                className='btn btn1'
            >
            Projects
            </button>
            <button 
                onClick={() => navigate('/resume')}
                className='btn btn1'
            >
            Resume
            </button>
        </nav>
    )
}

export default NavigationButtons;