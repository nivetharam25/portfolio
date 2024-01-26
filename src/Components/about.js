import React from 'react';

function About() {
    return (
        <>
            <section id="About">
                <div class="container">
                    <div class="row">
                        <h1 style={{ textAlign: "center" }} id="heading "> About me</h1>
                        <p id="para" style={{ textIndent: "35px" }}> Hi! I'm Nivetha, I have done undergraduation in Electronics and communication Engineering from University college of engineering,Tindivanam-Anna University. I have scored CGPA of 7.94 in Bachelor of Engineering. Along with that i have done my Web development internship in digital cuckoo and I'm currenlty working in wipro Techslogies as a project engineer.I believe that the skills that i have attained from the dynamic environment and competitive college life define me and i'm looking forward to implementing and polishing them in an opportunities that i receive.</p>
                    </div>
                </div>
                <div class="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 ">
                                Birth of Date:<span> 06 Jun 2000</span><br /><br />
                                Age:<span> 21</span>
                            </div>
                            <div className="col-md-4 ">
                                Country: <span> India</span><br /><br />
                                State:<span> Tamil Nadu</span>
                            </div>
                            <div className="col-md-4 ">
                                District:<span> Kallakurichi</span><br /><br />
                                City:<span> sankarapurm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;