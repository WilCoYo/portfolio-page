import React, { useEffect } from 'react';
import GLOBE from 'vanta/src/vanta.globe'

const Projects = () => {

    useEffect(()=>{
        GLOBE({
          el: "#vanta",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x899651,
          backgroundColor: 0x032222
        })
      }, [])


    return (
        <div className='projects-section' id='vanta'>
          
        </div>
    );
}

export default Projects