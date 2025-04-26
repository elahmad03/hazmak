import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Homes';
import ErrorPage from './pages/ErrorPage';
import Projects from './pages/Projects';



function App() {
  return (
    <Router>
    <Header /> 
      {/* All routes go here */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        {/* This route will catch any path that doesn't match the ones above */}
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;