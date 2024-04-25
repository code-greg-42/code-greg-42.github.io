import React from 'react';

function MyNavbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Gregory Andersson</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/code-greg-42">GitHub</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/code-greg-42">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MyNavbar;