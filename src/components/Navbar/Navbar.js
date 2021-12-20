import React from 'react'
function Navbar() {
    return (
        <>
            <div className='container'>
                <nav className="navbar navbar-expand-sm navbar-dark bg-danger pl-5 fixed-top" id='commongBG'>
                    <a href="index.html" className="navbar-brand">AliveNow Inc.</a>
                    <span className="navbar-text">Learn and Implement</span>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="myMenu">
                        <ul className="navbar-nav pl-5 custom-nav">
                            <li className="nav-item"><a href="index.html" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="#Services" className="nav-link">Services</a></li>
                            <li className="nav-item"><a href="#Courses" className="nav-link">Courses</a></li>
                            <li className="nav-item"><a href="#Team" className="nav-link">Team</a></li>
                            <li className="nav-item"><a href="#Contact" className="nav-link">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
