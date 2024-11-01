import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationButtons = () => {
    const navigate = useNavigate();

    const downloadMouseOn = () => {
        const downloadIcon = document.getElementById('download-icon');
        const resumeWord = document.getElementById('resume-word');
        const buttons = document.getElementsByClassName('btn');

        if(downloadIcon && resumeWord) {
            downloadIcon.style.display = 'block';
            resumeWord.style.display = 'none';
            

            Array.from(buttons).forEach(button => {
                button.style.padding = '2.25rem .5rem';
            });
        }
    }

    const downloadMouseOut = () => {
        const downloadIcon = document.getElementById('download-icon');
        const resumeWord = document.getElementById('resume-word');
        const buttons = document.getElementsByClassName('btn');

        if(downloadIcon && resumeWord) {
            downloadIcon.style.display = 'none';
            resumeWord.style.display = 'block'

            Array.from(buttons).forEach(button => {
                button.style.padding = '1.5rem .5rem';
            });
           
        }
    }

    


    

  
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
            <a 
                href='/Yonkin, Cody W. Resume.pdf'
                target='_blank'
                download
            >
                <button 
                    onMouseEnter={downloadMouseOn}
                    onMouseLeave={downloadMouseOut}
                    className='btn btn5'
                    id='btn5'
                >
                    <span 
                        class="material-symbols-outlined"
                        id='download-icon'
                        style={{display: 'none'}}
                    >
                    download
                    </span>
                    <p 
                        
                        style={{display: ''}}
                        id='resume-word'
                    >
                    Resume
                    </p>
                </button>
            </a>
        </nav>
    )
}

export default NavigationButtons;