import React from 'react'

function Banner() {
    return (
        <>
            <header className="jumbotron back-image">
                <div className="text-center textBanner">
                    <h1 className="text-uppercase text-danger font-weight-bold">Welcome to AliveNow Developers</h1>
                    <p className="font-italic font-weight-bold st">Learn and Implement</p>
                    <a href="#Contact" className="btn btn-outline-danger mr-4">Hire Us</a>
                    <a target="_blank" className="btn btn-outline-danger">Join Us</a>
                </div>
            </header>
        </>
    )
}

export default Banner
