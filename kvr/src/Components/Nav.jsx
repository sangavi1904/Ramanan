import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
    return (
        <section>
            <nav class="navbar navbar-expand-lg " id='home'>
                <div class="container-fluid border-bottom">
                    <Link class="navbar-brand" to="#">
                        <img src="https://kvramanan.com/wp-content/uploads/2023/07/Image-Cut-80x80-min.png" alt=" navlogo" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-3 p-4 mb-lg-0 text-center ">

                            <li class="nav-item heading6 ">
                                <a class="nav-link active px-3" aria-current="page" id='name-nav' href='#home'>Home</a>
                            </li>

                            <li class="nav-item heading6">
                                <a class="nav-link active px-3 " aria-current="page" id='name-nav' href="#summary">About Us</a>
                            </li>
                           
                            <li class="nav-item heading6 ">
                                <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#technicalskill">Portfolio</a>
                            </li>
            
                            <li class="nav-item heading6">
                                <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#resume">Technical</a>
                            </li>

                            <li class="nav-item heading6">
                                <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#resume">Work</a>
                            </li>

                            <li class="nav-item heading6 ">
                                <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#testimonial">Testimonial</a>
                            </li>

                            <li class="nav-item heading6">
                                <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#contact">Contact</a>
                            </li>

                            <li class="nav-item heading6">
                                <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#contact">oioi</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Nav