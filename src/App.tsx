import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Sidebar from './components/Layout/Sidebar';
import Home from './pages/Home';
import DigitalLogicandCircuits from './pages/DigitalLogicandCircuits';
import ComputerArchitecture from './pages/ComputerArchitecture';
import OperatingSystems from './pages/OperatingSystems';
import DataStructuresandAlgorithms from './pages/DataStructuresandAlgorithms';
import FullStackWebDevelopment from './pages/FullStackWebDevelopment';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logic-gates" element={<DigitalLogicandCircuits />} />
            <Route path="/computer-architecture" element={<ComputerArchitecture />} />
            <Route path="/operating-systems" element={<OperatingSystems />} />
            <Route path="/algorithms" element={<DataStructuresandAlgorithms />} />
            <Route path="/full-stack-development" element={<FullStackWebDevelopment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;