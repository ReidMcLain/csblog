import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/logic-gates">Digital Logic/Circuits</Link></li>
          <li><Link to="/computer-architecture">Computer Architecture</Link></li>
          <li><Link to="/operating-systems">Operating Systems</Link></li>
        </ul>
      </nav>
      <DarkModeToggle />
    </header>
  );
};

export default Header;