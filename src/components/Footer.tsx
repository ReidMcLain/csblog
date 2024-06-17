import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Reid's csblog. All rights reserved.</p>
      <div className="social-links">
        <a href="https://x.com/ReidMMcLain">Twitter</a>
        <a href="ttps://www.linkedin.com/in/reid-mclain-678441179/">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;