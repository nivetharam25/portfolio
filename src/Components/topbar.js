import React from 'react';

function TopBar() {
    return (
        <>
            <section id="topBar" >
                <nav class="nav navbar-inverse navbar-fixed-top ">
                    <div className="container-fluid">

                        <a href="#" class="navbar-brand">my portfolio</a>
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav navbar-right " >

                                <li><a href="#hero">Home</a></li>
                                <li><a href="#About">About</a></li>
                                <li><a href="#contact ">Contact</a></li>
                                <li><a href="#education">Resume</a></li>
                            </ul>
                        </div>
                    </div>

                </nav>
            </section>

        </>
    )
}

export default TopBar;