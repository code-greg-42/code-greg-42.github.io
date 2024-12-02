import React, { useState } from 'react';
import FeatureProject from './components/FeatureProject';
import OtherProjects from './components/OtherProjects';
import About from './components/About';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [activePage, setActivePage] = useState('FeatureProject');

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  const renderPage = () => {
    switch (activePage) {
      case 'FeatureProject':
        return <FeatureProject openLink={openLink} />;
      case 'OtherProjects':
        return <OtherProjects openLink={openLink} />;
      case 'About':
        return <About openLink={openLink} />;
      default:
        return <FeatureProject openLink={openLink} />;
    }
  };

  return (
    <div className="bg-dark d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="bg-light border border-3 border-dark" style={{ width: '97%', height: '97vh', overflowY: 'auto' }}>
        <h1 className="text-center custom-title mh-4 mt-4">GAMES BY GREG</h1>
        <div className="custom-line"></div>
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
            <div className="navbar-nav d-flex gap-2 gap-md-3">
              <button className="nav-item nav-link custom-btn" onClick={() => setActivePage('FeatureProject')}>Feature Project</button>
              <button className="nav-item nav-link custom-btn" onClick={() => setActivePage('OtherProjects')}>Other Projects</button>
              <button className="nav-item nav-link custom-btn" onClick={() => setActivePage('About')}>About</button>
              <button className="nav-item nav-link custom-btn" onClick={() => openLink('https://github.com/code-greg-42')}>GitHub</button>
              <button className="nav-item nav-link custom-btn" onClick={() => openLink('https://www.linkedin.com/in/gregory-andersson')}>LinkedIn</button>
            </div>
          </div>
        </nav>
        <div className="content-container mb-5">{renderPage()}</div>
        <div className="separation-line mb-5"></div>

        {/* Footer */}
        <footer className="text-center text-dark py-2 custom-footer">
          <p className="mb-2">
            &copy; 2024 GamesByGreg. All projects are open-source and available on GitHub.
          </p>
          <div className="d-flex justify-content-center gap-2">
            <a
              href="https://github.com/code-greg-42"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary btn-sm"
            >
              <i className="fab fa-github me-1"></i> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gregory-andersson-3705a6176/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary btn-sm"
            >
              <i className="fab fa-linkedin me-1"></i> LinkedIn
            </a>
          </div>
        </footer>


      </div>
    </div>
  );
}

export default App;
