// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Expertise from './pages/Expertise';
import WorkList from './pages/WorkList';
import WorkTemplate from './pages/WorkTemplate';
import TorchPage from './pages/TorchPage';
import About from './pages/About';
import CV from './pages/CV';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/worklist" element={<WorkList />} />
        <Route path="/work/:id" element={<WorkTemplate />} />
        <Route path="/torch" element={<TorchPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/CV" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;