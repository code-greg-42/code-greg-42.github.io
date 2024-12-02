import React from 'react';

const About = ({ openLink }) => {

  return (
    <div className="container">
        <div className="p-1 py-md-4 px-md-5 custom-border">
            {/* Title */}
            <div className="content-title-container">
            <h2 className="card-heading text-center">About</h2>
            <div className="short-line mb-4"></div>
            </div>

            {/* Content */}
            <div className="row align-items-start px-1 py-1 py-md-3">

            {/* Photo */}
                <div className="col-md-4 text-center mb-3 mb-md-0 px-5 px-md-2">
                    <img
                    src="/images/greg_and_cooper.jpg"
                    alt="Greg and Cooper"
                    className="img-fluid rounded custom-image"
                    />
                </div>

            {/* Text */}
            <div className="col-md-8 card-body px-3">
                <p>
                I’m Greg, a passionate and driven game developer with a focus on programming and systems design. My journey into game development is fueled by a lifelong love of games, both as a player and a creator. I began creating games as a kid by toying around with the Warcraft III World Editor, and more recently I've been using Unity and C# to bring my ideas to life. I’m currently seeking an entry-level programming position in the game development industry, where I can contribute to a team and continue honing my skills.
                </p>
                <p>
                Through completing numerous coding bootcamps and developing projects like Orbit Oasis, I’ve gained hands-on experience building scalable systems, debugging complex issues, refining features based on tester feedback, and more. I thrive when solving intricate problems and enjoy tackling both big-picture systems design and smaller, detail-oriented tasks, such as implementing new features or optimizing existing mechanics.
                </p>
                <p>
                Before pursuing game development, I reached the highest levels in two competitive fields: Poker and World of Warcraft. Success in these fields required not only skill, but also the ability to analyze mistakes effectively, stay composed under pressure, think critically, and adapt to evolving challenges—qualities I now bring to my programming work. Whether I'm implementing new mechanics, debugging, or brainstorming, I approach every task with curiosity, precision, and determination.
                </p>
                <p>
                I am currently living in the Philadelphia (USA) area. Beyond coding, my hobbies include sports, nature walks, video games, board games, drones and robotics, and reading. My passion for games and problem-solving drives me to constantly learn and grow, and I’m excited to bring that mindset to a team where I can contribute and collaborate.
                </p>
                <p>
                If your team is looking for someone like me, I'd love to hear from you. Please reach out via LinkedIn.
                </p>
            </div>

            <div className="separation-line"></div>

            <div className="d-flex mt-4 justify-content-center gap-3">
                <button className="custom-btn" onClick={() => openLink('/docs/greg_andersson_resume.pdf')}>
                download resume
                </button>
                <button className="custom-btn" onClick={() => openLink('https://www.linkedin.com/in/gregory-andersson')}>
                connect on linkedin
                </button>
            </div>

            <div className="separation-line mt-4"></div>

    </div>
  </div>
</div>
  );
};

export default About;