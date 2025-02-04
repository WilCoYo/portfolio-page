import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home.js/Home.js'
import About from './pages/About.js/About.js'
import NavigationButtons from './components/NavigationButtons.js/NavigationButtons.js'
import Experience from './pages/Experience.js/Experience.js'
import Projects from './pages/Projects.js/Projects.js'

import NET from 'vanta/src/vanta.net'





const App = () => {

  useEffect(()=>{
    NET({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x899651,
      backgroundColor: 0x032222,
      showDots: false
    })
  }, [])



  return (
    <Router >
      <div id='vanta'></div>
    <NavigationButtons />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="" element={<Navigate to="/" replace />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    
  </Router>
      
  );
};

export default App;
