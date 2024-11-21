import React from 'react';
import MyNavbar from './MyNavbar';
import Portfolio from './Portfolio';

function App() {
  return (
    <div>
      <MyNavbar />
      <Portfolio />
      <div id="about" className="container mt-5">
      <h2>About Me</h2>
      </div>
    </div>
  );
}

export default App;
