import React from 'react'

function Contact() {
    return (
        <>
            <div className="container" id="Contact">
                <h2 className="text-center mb-4">Contact US</h2>
                <div className="row">
                    <div className="col-md-8">
                        <form action="#" method="post">
                            <input className="form-control" name="name" placeholder="Name" /><br />
                            <input className="form-control" name="phone" placeholder="Phone" /><br />
                            <input className="form-control" name="email" placeholder="E-mail" /><br />
                            <textarea className="form-control" name="text" placeholder="How can we help you?"></textarea><br />
                            <input className="btn btn-primary" type="submit" value="Send" /><br /><br />
                        </form>
                    </div>

                    <div className="col-md-4 text-center">
                        <strong>Headquarter:</strong> <br />
                        AliveNow, <br />
                        2nd Floor, No, 538,<br /> Chinmaya Mission Hospital Rd,<br /> above Tadka Singh, Stage 1, <br />Indiranagar, Bengaluru,<br /> Karnataka 560038
                        <a href="https://www.alivenow.in" target="_blank"> www.alivenow.in</a> <br />


                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact
