import React from 'react'

function Services() {
    return (
        <>
            <div className="container text-center border-bottom" id="Services">
                <h2>Our Services</h2>
                <div className="row mt-4">
                    <div className="col-sm-4 mb-4">
                        <a href="#"><i className="fab fa-android fa-10x text-success"></i></a>
                        <h4 className="mt-4">Mobile Application</h4>
                    </div>
                    <div className="col-sm-4 mb-4">
                        <a href="#"><i className="fas fa-desktop fa-10x text-primary"></i></a>
                        <h4 className="mt-4">Web Application</h4>
                    </div>
                    <div className="col-sm-4 mb-4">
                        <a href="#"><i className="fas fa-database fa-10x text-info"></i></a>
                        <h4 className="mt-4">Dashborad</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
