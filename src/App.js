import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import NavigationButtons from './components/NavigationButtons'
import Experience from './pages/Experience'
import Projects from './pages/Projects'





const App = () => {


  return (
    <Router>
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
