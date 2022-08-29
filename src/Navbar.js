import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    const refreshSession = () => {
        window.location.reload();
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg sticky-top bg-light shadow p-3 mb-1 bg-white rounded">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <strong style={{fontSize: "larger"}}><i className="fa-brands fa-quinscape mx-2"></i>Quiz</strong>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Check">Score</Link>
                            </li>
                            <li className="nav-item">
                                <span className='nav-link' style={{cursor: "pointer"}} onClick={refreshSession}><i className="fa-solid fa-arrows-rotate"></i></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
