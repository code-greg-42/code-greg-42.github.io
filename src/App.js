import React from 'react';
import MyNavbar from './MyNavbar';
import Portfolio from './Portfolio';
import './App.css';

function App() {
  return (
    <div className="bg-dark d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="bg-light border border-3 border-dark" style={{ width: '97%', height: '97%' }}>
        <h1 className="text-center custom-title m-4">GAMES BY GREG</h1>
        <nav className="navbar navbar-expand-md navbar-light custom-navbar">
          <button
            className="navbar-toggler mx-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <div className="navbar-nav d-flex gap-3">
              <button className="nav-item nav-link custom-btn">Feature Project</button>
              <button className="nav-item nav-link custom-btn">Other Projects</button>
              <button className="nav-item nav-link custom-btn">About</button>
              <button className="nav-item nav-link custom-btn">GitHub</button>
              <button className="nav-item nav-link custom-btn">LinkedIn</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
