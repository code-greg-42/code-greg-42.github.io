import React from 'react';
import MyNavbar from './MyNavbar';

function App() {
  return (
    <div>
      <MyNavbar />
      <div id="portfolio" className="container mt-5">
        <h2>Portfolio</h2>
        <p>Welcome to my portfolio! Here, I showcase some of my most significant projects in game development. Each project represents a unique blend of creativity, technical skills, and passion for gaming.</p>
  
        <h3>Project 1: Fantasy World Explorer</h3>
        <p>This project is a 3D adventure game set in a lush, expansive fantasy world. Players can explore hidden territories, solve puzzles, and battle legendary creatures. I was responsible for the level design and coding of gameplay mechanics using Unity and C#.</p>
  
        <h3>Project 2: Space Defender</h3>
        <p>Space Defender is an arcade-style shooter game where players must defend their base against waves of alien attackers. Developed using Unreal Engine, this project allowed me to delve deep into AI programming and multiplayer setup.</p>
      </div>
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
