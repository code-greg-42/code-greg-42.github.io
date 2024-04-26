import React from 'react';

function Portfolio() {
  return (
    <div id="portfolio" className="container mt-5">
      <div className="row">
        {/* Column 1 */}
        <div className="col-md-6">
          <h3>Title One</h3>
          <video controls style={{ width: '100%' }}>
            <source src="/videos/test-video1.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <p>Description of Video One. This section can be expanded to include detailed information about the project or game.</p>
          <img src="/images/test-image1.png" alt="Screenshot of Project One" style={{ width: '100%' }}/>
          <p>Description of the screenshot, detailing features or important aspects of the project or gameplay.</p>
        </div>

        {/* Column 2 */}
        <div className="col-md-6">
          <h3>Title Two</h3>
          <video controls style={{ width: '100%' }}>
            <source src="/videos/test-video1.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <p>Description of Video Two. This part might focus on different elements or unique challenges encountered during this project.</p>
          <img src="/images/test-image1.png" alt="Screenshot of Project Two" style={{ width: '100%' }}/>
          <p>Description related to the second screenshot. This might include notes on the development process or technical details.</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;