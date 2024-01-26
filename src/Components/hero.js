import React from 'react';

function Hero() {
    return (
        <>
            <section id="hero">
                <center><h1> Hi! I'm a Java Developer</h1></center>
                <br /> <br />
                <div class="container">
                    <div className="row">
                        <div class="col-md-3 col-lg-3   ">
                            <img class="img-responsive " src="/images/myimg.jpg" width="200px" height="0px" />
                        </div>
                        <div class="col-md-9  col-lg-9  ">
                            <div id="design">
                                <h3>My Name is Nivetha </h3>
                                <p>I am a Java developer and i am very passionate and dedicate to my work.I have acquired the skills and knowledge necessary to make project a sucess. i enjoy every step of the design process from discussuion and collabaration.Along with that i really enjoy to solve the bugs and implementing new logics </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero;