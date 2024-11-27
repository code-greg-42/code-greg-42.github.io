import React from 'react';

const FeatureProject = () => {

    const openLink = (url) => {
        window.open(url, '_blank', 'noopener, noreferrer');
      };
  return (
    <div className="container">
      <div className="p-1 p-md-4 custom-border">

        {/* Title */}
        <div className="content-title-container">
        <h2 className="card-heading text-center">Feature Project: Orbit Oasis</h2>
        <div className="short-line mb-4"></div>
        </div>

        {/* Short Description */}
        <p className="card-body">
        Orbit Oasis is a casual, creative, exploratory game where players can build up and modify their environment. Set from the perspective of a recently freed robot who has been granted their own plot of land, players can plant trees, build structures, raise animals, and create an oasis in any way they choose.
        </p>
        <p className="card-note">
            **Orbit Oasis was created for the purpose of showcasing programming skills, and uses entirely free and available-for-use assets. The code for the game allows for new models and items to be added easily, if new assets are available. See the GitHub link below for more details.**
        </p>

        <div className="separation-line mb-4"></div>

        {/* YouTube Trailer */}
        <div className="mb-4 text-center">
        <div className="ratio ratio-16x9 custom-video">
            <iframe
            src="https://www.youtube.com/embed/Y6ZFQQC7rkk?si=GoxsNN8VZT3ejnhx&vq=hd1080"
            title="YouTube video player"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            ></iframe>
        </div>
        </div>

        {/* buttons */}
        <div className="d-flex justify-content-center gap-3 mb-4">
          <button className="custom-btn" onClick={() => openLink('https://grandersson.itch.io/orbit-oasis')}>
            play now!
          </button>
          <button className="custom-btn" onClick={() => openLink('https://github.com/code-greg-42/Orbit-Oasis')}>
            view GitHub
          </button>
        </div>

        <div className="separation-line mb-5"></div>

        {/* Key Features */}
        <div>
            <div className="mb-4">
                <h3 className="card-heading">Key Features</h3>
                <div className="section-line"></div>
            </div>

            <div className="key-feature-item mb-3">
                <h4 className="key-feature-title">Dynamic Building System</h4>
                <p>
                Players can build freely, but are required to attach above-ground builds to existing builds, similar to systems in games like Fortnite. Additionally, placing a build is only allowed if it does not significantly overlap with other objects. The system includes real-time preview mechanics to help players visualize placement before committing, and a mode for deleting specific previously placed builds.
                </p>
            </div>

            <div className="key-feature-item mb-3">
                <h4 className="key-feature-title">Interactive Farming Mechanics</h4>
                <p>
                The farming system uses proximity-based detection to identify nearby farmable objects, and automatically selects the appropriate tool for interaction when the farming key is pressed. This ensures a smooth, intuitive experience while reducing keybind complexity. Each farmable object can only be farmed a certain amount of times, but this number regenerates over time, even if the farmable object is being stored in the player's inventory.
                </p>
            </div>

            <div className="key-feature-item mb-3">
                <h4 className="key-feature-title">Flexible and Robust Inventory System</h4>
                <p>
                All in-game objects are represented as items within a unified inventory system. Each item is equipped with unique descriptions and buy/sell values. The system automatically stacks and sorts items, and players can move or swap items freely. Drag-and-drop functionality is used to simplify item management and enhance user experience.
                </p>
            </div>

            <div className="key-feature-item mb-3">
                <h4 className="key-feature-title">Customizable Environment</h4>
                <p>
                Utilizing the inventory system, players have the freedom to reshape their environment by capturing objects into their inventory and re-placing them in real time. This feature allows for complete creative control, enabling players to design their oasis as they see fit. Capturing an object is achieved by launching a projectile from a bow, creating an engaging player experience.
                </p>
            </div>

            <div className="key-feature-item mb-3">
                <h4 className="key-feature-title">Space Race Minigame</h4>
                <p>
                A standalone game mode with unique movement, attack, and camera mechanics, the space race minigame offers a distinctly different gameplay experience. The checkpoint locations and obstacle behaviors are randomized with each playthrough, enhancing replayability. It has multiple difficulties with conditional rewards and 'best time' tracking, and the rewards earned tie back to the main game’s economy.
                </p>
            </div>

            <div className="key-feature-item mb-3">
                <h4 className="key-feature-title">Introductory Quest System</h4>
                <p>
                A guided series of quests introduces players to the core mechanics and controls of Orbit Oasis. Each quest unlocks a new mechanic, and features dialogue for both introductions and completions, helping players learn the game's systems at a comfortable pace. Quest rewards are given upon completion and are often utilized for the next introductory quest.
                </p>
            </div>

            <div className="key-feature-item mb-3">
                <h4 className="key-feature-title">Performant Autosave Functionality</h4>
                <p>
                Progress is saved whenever any key action occurs, such as buying, selling, or placing objects, or gaining progress on a quest. This ensures that progress is retained even in the event of a crash, and is implemented in a way that reduces the potential for exploits. To maintain performance, the autosave system breaks down data-saving into smaller, more manageable chunks, and only saves the data fields which have actually been changed.
                </p>
            </div>

            <div className="key-feature-item">
                <h4 className="key-feature-title">Scalable Systems</h4>
                <p>
                The game’s core systems are built with scalability in mind, enabling the addition of new items, objects, and sounds with minimal code changes. Centralized manager scripts are used to ensure that functionality is well-organized and easy to expand.
                </p>
            </div>
        </div>

        <div className="separation-line mb-5"></div>

        {/* Screenshots */}
        <div className="key-features-section-header mb-4">
            <h3 className="card-heading">Screenshots</h3>
            <div className="section-line"></div>
        </div>

        <div className="row g-3"> {/* Bootstrap row with gaps */}
            <div className="col-md-6">
                <a
                href="https://img.itch.zone/aW1hZ2UvMzExODQxNy8xODYzNzEzMi5wbmc=/original/4oN5L6.png"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                src="https://img.itch.zone/aW1hZ2UvMzExODQxNy8xODYzNzEzMi5wbmc=/original/4oN5L6.png"
                alt="orbit oasis tree planting screenshot"
                className="img-fluid rounded custom-image"
                />
                </a>
            </div>
            <div className="col-md-6">
                <a
                href="https://img.itch.zone/aW1hZ2UvMzExODQxNy8xODYzNzE0Ny5wbmc=/original/nv3Zrx.png"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                src="https://img.itch.zone/aW1hZ2UvMzExODQxNy8xODYzNzE0Ny5wbmc=/original/nv3Zrx.png"
                alt="orbit oasis building screenshot"
                className="img-fluid rounded custom-image"
                />
                </a>
            </div>
            <div className="col-md-6">
                <a
                href="https://img.itch.zone/aW1hZ2UvMzExODQxNy8xODYzNzE0OS5wbmc=/original/vtEujk.png"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                src="https://img.itch.zone/aW1hZ2UvMzExODQxNy8xODYzNzE0OS5wbmc=/original/vtEujk.png"
                alt="orbit oasis space race screenshot"
                className="img-fluid rounded custom-image"
                />
                </a>
            </div>
            <div className="col-md-6">
                <a
                href="https://img.itch.zone/aW1hZ2UvMzExODQxNy8xODYzNzEzNC5wbmc=/original/zoi4yR.png"
                target="_blank"
                rel="noopener noreferrer"
                >
                <img
                src="https://img.itch.zone/aW1hZ2UvMzExODQxNy8xODYzNzEzNC5wbmc=/original/zoi4yR.png"
                alt="orbit oasis environment customization screenshot"
                className="img-fluid rounded custom-image"
                />
                </a>
            </div>
        </div>

        <div className="separation-line mt-4 mb-5"></div>

        <div className="key-features-section-header">
            <h3 className="card-heading">Links</h3>
            <div className="section-line"></div>
        </div>

        <ul className="custom-list-item mt-4">
            <li className="mb-2">
                <a
                href="https://github.com/code-greg-42/Orbit-Oasis"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-link"
                >
                <b>GitHub Repository</b>
                </a>
            </li>
            <li className="mb-2">
                <a
                href="https://grandersson.itch.io/orbit-oasis"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-link"
                >
                <b>Game Page on itch.io</b>
                </a>
            </li>
            <li className="mb-2">
                <a
                href="https://youtu.be/Y6ZFQQC7rkk"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-link"
                >
                <b>Game Trailer on YouTube</b>
                </a>
            </li>
            <li className="mb-2">
                <a
                href="https://youtu.be/8dULJcSHKwY"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-link"
                >
                <b>Gameplay Video (Space Race Minigame) on YouTube</b>
                </a>
            </li>
            <li className="mb-2">
                <a
                href="https://youtu.be/dJkheYfaU6U"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-link"
                >
                <b>Gameplay Video (Full Tutorial Playthrough) on YouTube</b>
                </a>
            </li>
        </ul>

        <div className="separation-line mt-3 mb-5"></div>

      </div>
    </div>
  );
};

export default FeatureProject;