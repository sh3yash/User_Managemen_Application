import React from 'react';
import './Header.css';
import logo from '../assets/logo1.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="User Manager" style={{width:'70px',height:'auto'}}/>
        
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/users">User List</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
