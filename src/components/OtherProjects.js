import React from 'react';

const OtherProjects = () => {
    const openLink = (url) => {
        window.open(url, '_blank', 'noopener, noreferrer');
      };

  return (
    <div className="container">
      <div className="border border-3 p-4 custom-border">

        {/* Title */}
        <div className="content-title-container">
        <h2 className="card-heading text-center">Other Projects</h2>
        <div className="short-line mb-4"></div>
        </div>

        {/* Short Description */}
        <p className="card-body">
        While less complex than my feature project Orbit Oasis, the projects below represent important milestones in my journey as a developer.
        Each one proposed unique challenges that refined specific skills, such as <b>ChatGPT integration</b>, <b>AI-driven enemy behavior</b>, and creating engaging interactions with <b>Unity's Physics System</b>. 
        Together, they showcase my ability to learn, grow, and tackle new challenges in game development through effective problem-solving and adaptability.
        </p>
        <p className="card-note">**Projects listed from most to least recent**</p>

        {/* Project 1: Improbability Police */}
        <div className="mb-4">
            <h3 className="card-heading">Improbability Police</h3>
            <div className="section-line"></div>
        </div>
        <p className="card-body">Improbability Police is a proof-of-concept game that was developed for a small 10-day itch.io game jam, where it came in 1st place.
            In the game, players are tasked with building a civilization on a newly colonized planet by making decisions of what to build.
            It utilizes GPT-4 to give updates on how the civilization is going and to assess the overall happiness of the civilization, as well as assessing the uniqueness of the player's responses.
            It does not have a current working demo due to API costs, but gameplay videos can be found below.
        </p>
        {/* Improbability Police Links */}
        <div className="d-flex justify-content-center gap-3 mb-4">
            <button className="custom-btn" onClick={() => openLink('https://www.youtube.com/watch?v=WctE6Gbzzak')}>
            watch video
            </button>
            <button className="custom-btn" onClick={() => openLink('https://github.com/code-greg-42/Improbability-Police')}>
            view GitHub
            </button>
        </div>
        {/* Screenshots */}
        <div className="key-feature-title">Screenshots</div>
        <div className="row g-3"> {/* Bootstrap row with gaps */}
            <div className="col-md-6">
                <a
                href="https://img.itch.zone/aW1hZ2UvMjczOTU3OC8xNjM0NTAxNC5wbmc=/original/azqntv.png"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                src="https://img.itch.zone/aW1hZ2UvMjczOTU3OC8xNjM0NTAxNC5wbmc=/original/azqntv.png"
                alt="improbability police gameplay screenshot"
                className="img-fluid"
                />
                </a>
            </div>
            <div className="col-md-6">
                <a
                href="https://img.itch.zone/aW1hZ2UvMjczOTU3OC8xNjM0NTAwNS5wbmc=/original/ygVH6m.png"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                src="https://img.itch.zone/aW1hZ2UvMjczOTU3OC8xNjM0NTAwNS5wbmc=/original/ygVH6m.png"
                alt="improbability police gameplay screenshot"
                className="img-fluid"
                />
                </a>
            </div>
        </div>
        <div className="key-feature-title mt-2">Skills Used</div>
        <ul className="custom-list-item">
            <li>
                <b>GPT-4 Integration:</b> Implented GPT-4 directly into the Unity Project for dynamic content generation and player interaction.
            </li>
            <li>
                <b>Prompt Engineering:</b> Crafted effective prompts to elicit desired responses from GPT-4, using both zero-shot and one-shot prompting, which was crucial for generating the right text and scores for the game.
            </li>
            <li>
                <b>Working Within a Deadline:</b> Managed time effectively to develop and deliver the game within the 10-day timeframe of the game jam.
            </li>
            <li>
                <b>Network Configuration:</b> Configured a Flask proxy server hosted on AWS EC2 to securely manage API requests.
            </li>
            </ul>
        <div className="key-feature-title">Additional Links</div>

        {/* Project 2: Skele Island */}
        <div className="mb-4">
            <h3 className="card-heading">Skele-Island</h3>
            <div className="section-line"></div>
        </div>
        <p className="card-body">Skele-Island is a simple and fun third-person shooter where the goal is to survive waves of skeletons without falling off the edge!
            Meant to build on the previous project, Skele-Island incorporated new player movement, animation, and AI enemy behavior.
        </p>
        {/* Skele-Island Links */}
        <div className="d-flex justify-content-center gap-3 mb-4">
            <button className="custom-btn" onClick={() => openLink('https://www.youtube.com/watch?v=KBcFlNdj8Iw')}>
            watch
            </button>
            <button className="custom-btn" onClick={() => openLink('https://play.unity.com/en/games/59be5606-6843-4fff-a3f8-651f5eb0e2cb/skele-island')}>
            play
            </button>
            <button className="custom-btn" onClick={() => openLink('https://github.com/code-greg-42/Skele-Island')}>
            GitHub
            </button>
        </div>
        {/* Screenshots */}
        <div className="key-feature-title">Screenshots</div>
        <div className="row g-3"> {/* Bootstrap row with gaps */}
            <div className="col-md-6">
                <a
                href="https://github.com/code-greg-42/Skele-Island/blob/main/Screenshots/skele-island-2.png?raw=true"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                src="https://github.com/code-greg-42/Skele-Island/blob/main/Screenshots/skele-island-2.png?raw=true"
                alt="skele-island gameplay screenshot"
                className="img-fluid"
                />
                </a>
            </div>
            <div className="col-md-6">
                <a
                href="https://github.com/code-greg-42/Skele-Island/blob/main/Screenshots/skele-island-boss-screenshot.png?raw=true"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                src="https://github.com/code-greg-42/Skele-Island/blob/main/Screenshots/skele-island-boss-screenshot.png?raw=true"
                alt="skele-island boss screenshot"
                className="img-fluid"
                />
                </a>
            </div>
        </div>
        <div className="key-feature-title mt-2">Features</div>
        <ul className="custom-list-item">
            <li>
                <b>Third-Person Aiming and Movement:</b> The player character moves with standard third-person combat functionality, and is able to strafe, roll, and jump.
            </li>
            <li>
                <b>AI Enemies:</b> The enemies are able to correctly move around obstacles and follow the player. They attack when in range.
            </li>
            <li>
                <b>Player Abilities:</b> The player is able to use two abilities: a simple damage buff, and an ability that draws all enemies in range towards a tornado that the player places on the ground. Each ability requires charges to be used, and additional charges can be obtained by collecting pickups off of dead enemies.
            </li>
            <li>
                <b>Boss Wave:</b> A much stronger enemy spawns after defeating the standard waves. The boss has an enlarged size, range, health, and does not get knocked back when struck with an attack by the player.
            </li>
            <li>
                <b>Pickups:</b> Some enemies drop pickup items. These pickups can increase the player's charges of abilities, heal the player to full health, or increase the player's overall damage and speed. The pickup drop rate is different on each difficulty.
            </li>
            <li>
                <b>UI Components:</b> Player health, boss health, and a player castbar (for casting main attacks) are all featured on the UI in this game. They are updated in accordance with the events in the game in a smooth manner.
            </li>
        </ul>
        <div className="key-feature-title">Additional Links</div>

        {/* Project 3: PowerHouse */}
        <div className="mb-4">
            <h3 className="card-heading">PowerHouse: Aim Practice</h3>
            <div className="section-line"></div>
        </div>
        <p className="card-body">PowerHouse: Aim Practice functions as a simple aim trainer for those wishing to improve their mouse clicking abilities for shooters and aim-related games. It also includes 3 fun abilities to add a layer of decision-making and strategy not usually seen in aim trainers, but seen frequently in modern shooting games. As my first portfolio project, the simplicity of PowerHouse allowed me to get comfortable using Unity's Physics System and learn the ropes.
        </p>
        {/* Skele-Island Links */}
        <div className="d-flex justify-content-center gap-3 mb-4">
            <button className="custom-btn" onClick={() => openLink('https://play.unity.com/en/games/4a46ca87-b84e-411a-969b-a9b17a313efb/powerhouse11')}>
            play now
            </button>
            <button className="custom-btn" onClick={() => openLink('https://github.com/code-greg-42/PowerHouseScripts')}>
            view GitHub
            </button>
        </div>
        {/* Screenshots */}
        <div className="key-feature-title">Screenshots</div>
        <div className="row g-3"> {/* Bootstrap row with gaps */}
            <div className="col-md-6">
                <a
                href="https://github.com/code-greg-42/Skele-Island/blob/main/Screenshots/Other/powerhouse_screenshot_1.png?raw=true"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                src="https://github.com/code-greg-42/Skele-Island/blob/main/Screenshots/Other/powerhouse_screenshot_1.png?raw=true"
                alt="powerhouse gameplay screenshot"
                className="img-fluid"
                />
                </a>
            </div>
            <div className="col-md-6">
                <a
                href="https://github.com/code-greg-42/Skele-Island/blob/main/Screenshots/Other/powerhouse_screenshot_2.png?raw=true"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                src="https://github.com/code-greg-42/Skele-Island/blob/main/Screenshots/Other/powerhouse_screenshot_2.png?raw=true"
                alt="powerhouse game over screenshot"
                className="img-fluid"
                />
                </a>
            </div>
        </div>
        <div className="key-feature-title mt-2">Features</div>
            <ul className="custom-list-item">
                <li>
                    <b>Dynamic Health of Enemies:</b> Each enemy takes 3 shots to kill and begins healing back up if not shot for the last 5 seconds. The color of the enemy changes based on the current health total.
                </li>
                <li>
                    <b>Sporadic Movement of Enemies:</b> Each enemy has its own movement interval and will choose a random direction to move in every so often based on the movement interval.
                </li>
                <li>
                    <b>Abilities:</b> There are 3 abilities, each with its own cooldown, which cause different interactions with the enemies.
                    <ul>
                    <li><i>Golden Gun:</i> Causes enemies to be one-shot and shows a different death effect.</li>
                    <li><i>Slow Time:</i> Dramatically slows enemy movement speed for the next 3 seconds.</li>
                    <li><i>Force Pull:</i> Drags all current enemies to the center of the screen near the floor, pausing them there for 1 second.</li>
                    </ul>
                </li>
                <li>
                    <b>Point System:</b> Bonus points are awarded for clearing a wave ahead of the timer. Higher waves reward more points.
                </li>
            </ul>
        <div className="key-feature-title">Additional Links</div>


    </div>
    </div>
  );
};

export default OtherProjects;