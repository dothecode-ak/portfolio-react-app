import React from 'react'

function Footer() {
    return (
        <>
            <footer className="container-fluid bg-dark text-white mt-5 footerColor">
                <div className="container">
                    <div className="row py-3">
                        <div className="col-md-6">
                            <div>
                                <span>Follow Us: </span>
                                <a href="https://www.facebook.com/GeekyShow" target="_blank"><i className="fab fa-facebook-f px-3"></i></a>
                                <a href="https://twitter.com/Geekyshow1" target="_blank"><i className="fab fa-twitter pr-3"></i></a>
                                <a href="https://www.youtube.com/user/GeekyShow1" target="_blank"><i className="fab fa-youtube pr-3"></i></a>
                                <a href="#" target="_blank"><i className="fab fa-google-plus-g pr-3"></i></a>
                                <a href="#" target="_blank"><i className="fas fa-rss pr-3"></i></a>
                            </div>
                        </div>

                        <div className="col-md-6 text-right">
                            <small> Designed by <a href="https://www.alivenow." target="_blank">AliveNow</a> &copy; 2018. </small>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
