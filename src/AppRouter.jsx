import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Companies from './Components/Companies/companies';
import Residancies from './Components/Residancies/Residancies'
import Value from './Components/Value/Value';
import Contact from './Components/Contact/Contact';
import GetStarted from './Components/GetStarted/Getstarted';
import Footer from './Components/Footer/Footer';
import './App.css';
import './index.css';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<>
        <Hero />
        <Companies />
        <Residancies />
        <Value />
        <GetStarted />
        <Contact />
      
        </>} />
        <Route path="/residencies" element={<Residancies/>} />
        <Route path="/value" element={<Value />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-started" element={<GetStarted />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
