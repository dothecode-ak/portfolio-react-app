import React from 'react'

function Contact() {
    return (
        <>
            <div class="container" id="Contact">
                <h2 class="text-center mb-4">Contact US</h2>
                <div class="row">
                    <div class="col-md-8">
                        <form action="#" method="post">
                            <input class="form-control" name="name" placeholder="Name" /><br />
                            <input class="form-control" name="phone" placeholder="Phone" /><br />
                            <input class="form-control" name="email" placeholder="E-mail" /><br />
                            <textarea class="form-control" name="text" placeholder="How can we help you?" style="height:150px;"></textarea><br />
                            <input class="btn btn-primary" type="submit" value="Send" /><br /><br />
                        </form>
                    </div>

                    <div class="col-md-4 text-center">
                        <strong>Headquarter:</strong> <br />
                        Geeky Dev Pvt Ltd, <br />
                        Harmu, Ranchi <br />
                        Jharkhand - 834005 <br />
                        Phone: +00000000 <br />
                        <a href="https://www.geekyshows.com" target="_blank">www.geekyshows.com</a> <br />

                        <br /><br />
                        <strong>Kolkata Branch:</strong> <br />
                        Geeky Dev Pvt Ltd, <br />
                        Sec V, Kolkata <br />
                        WB - 804002 <br />
                        Phone: +00000000 <br />
                        <a href="https://www.geekyshows.com" target="_blank">www.geekyshows.com</a> <br />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact
