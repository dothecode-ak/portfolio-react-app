import React from 'react'

function Footer() {
    return (
        <>
            <footer class="container-fluid bg-dark text-white mt-5" style="border-top: 3px solid #DC3545;">
                <div class="container">
                    <div class="row py-3">
                        <div class="col-md-6">
                            <div>
                                <span>Follow Us: </span>
                                <a href="https://www.facebook.com/GeekyShow" target="_blank"><i class="fab fa-facebook-f px-3"></i></a>
                                <a href="https://twitter.com/Geekyshow1" target="_blank"><i class="fab fa-twitter pr-3"></i></a>
                                <a href="https://www.youtube.com/user/GeekyShow1" target="_blank"><i class="fab fa-youtube pr-3"></i></a>
                                <a href="#" target="_blank"><i class="fab fa-google-plus-g pr-3"></i></a>
                                <a href="#" target="_blank"><i class="fas fa-rss pr-3"></i></a>
                            </div>
                        </div>

                        <div class="col-md-6 text-right">
                            <small> Designed by <a href="https://www.geekyshows.com" target="_blank">GeekyShows</a> &copy; 2018. </small>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
