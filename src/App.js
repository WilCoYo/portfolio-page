import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import NavigationButtons from './components/NavigationButtons'
import Experience from './components/Experience'





const App = () => {


  return (
      <BrowserRouter>
      
        <NavigationButtons />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="" element={<Navigate to="/" replace />} />

            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />


            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      
      </BrowserRouter>
      
  );
};

export default App;
