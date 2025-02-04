import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home.js/Home.js'
import About from './pages/About.js/About.js'
import NavigationButtons from './components/NavigationButtons.js/NavigationButtons.js'
import Experience from './pages/Experience.js/Experience.js'
import Projects from './pages/Projects.js/Projects.js'

import TOPOLOGY from 'vanta/src/vanta.topology'





const App = () => {

  useEffect(()=>{
    TOPOLOGY({
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
      <BrowserRouter >
      
        <NavigationButtons />
        <div id="vanta">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="" element={<Navigate to="/" replace />} />

            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />


            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>  
      
      </BrowserRouter>
      
  );
};

export default App;
