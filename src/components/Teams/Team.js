import React from 'react'

function Team() {
    return (
        <>
            <div className="jumbotron bg-danger" id="Team">
                <div className="container">
                    <h2 className="text-center text-white">Team</h2>
                    <div className="row mt-5">
                        <div className="col-lg-3 col-sm-6">
                            <div className="card shadow-lg mb-2">
                                <div className="card-body text-center">
                                    <img src={require('../../assets/avtar1.jpeg')} />
                                    <h4 className="card-title">Rahul Kumar</h4>
                                    <p className="card-text">Itaque illo explicabo voluptatum, saepe libero rerum, ad ducimus voluptas nesciunt debitis numquam.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="card shadow-lg mb-2">
                                <div className="card-body text-center">
                                    {/* <img src="images/avtar2.jpeg" className="img-fluid" style="border-radius: 100px;" /> */}
                                    <h4 className="card-title">Sonam Sharma</h4>
                                    <p className="card-text">Itaque illo explicabo voluptatum, saepe libero rerum, ad ducimus voluptas nesciunt debitis numquam.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="card shadow-lg mb-2">
                                <div className="card-body text-center">
                                    {/* <img src="images/avtar3.jpeg" className="img-fluid" style="border-radius: 100px;" /> */}
                                    <h4 className="card-title">Sumit Vyas</h4>
                                    <p className="card-text">Itaque illo explicabo voluptatum, saepe libero rerum, ad ducimus voluptas nesciunt debitis numquam.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="card shadow-lg mb-2">
                                <div className="card-body text-center">
                                    {/* <img src="images/avtar4.jpeg" className="img-fluid" style="border-radius: 100px;" /> */}
                                    <h4 className="card-title">Jyoti Sinha</h4>
                                    <p className="card-text">Itaque illo explicabo voluptatum, saepe libero rerum, ad ducimus voluptas nesciunt debitis numquam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team
