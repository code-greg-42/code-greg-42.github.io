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
        <p>I am Gregory Andersson, a dedicated and passionate game developer with a rich background in computer science and digital art. I specialize in creating immersive gaming experiences that engage and excite players.</p>
  
        <p>After graduating with a degree in Computer Science from the University of Game Design, I have worked with several indie game studios, contributing to both major releases and experimental projects. My technical expertise lies in gameplay programming and artificial intelligence, but I am also skilled in 3D modeling and animation.</p>
  
        <p>Outside of work, I enjoy participating in game jams, exploring the latest in VR technology, and sharing my knowledge through workshops and community events.</p>
      </div>
    </div>
  );
}

export default App;
