import React from 'react'
import { Link } from 'react-router-dom'
import Ramanan from '../Assets/Images/ramananimg.jpg'
import Instaicon from '../Assets/Images/instaicon.png'
import Linkedin from '../Assets/Images/linkedin-icon.png'

function Nav() {
    return (
        <section>
            
            {/* Nav-Start */}
            <section className='nav-banner'>
            <nav class="navbar navbar-expand-lg nav-banner" id='home'>
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">
                        <img src="https://kvramanan.com/wp-content/uploads/2023/07/Image-Cut-80x80-min.png" alt=" navlogo" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-3 p-4 mb-lg-0 text-center ">

                            <li class="nav-item">
                                <a class="nav-link active px-3" aria-current="page" id='name-nav' href='#home'>Home</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active px-3 " aria-current="page" id='name-nav' href="#aboutus">About Us</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#portfolio">Portfolio</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#technical">Technical</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#work">Work</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#testimonial">Testimonial</a>
                            </li>

                            <li class="nav-item border-end">
                                <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#contact">Contact</a>
                            </li>

                            <li class="nav-item px-2 pt-1">
                                {/* <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#">oii</a> */}
                                <img src={Instaicon} alt="" className='head-icon' />
                            </li>
                            <li class="nav-item pt-1">
                                {/* <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#">oii</a> */}
                                <img src={Linkedin} alt="img-fluid" className='head-icon' />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Nav-End */}

            {/* Banner-Start */}
        
            <section className='container'>
                <div className='row py-5 mt-2'>

                    <div className='col-md-6 d-flex justify-content-center align-items-center'>
                        <div className=''>
                            <h5 className='text-light'>Hello, I'm</h5>
                            <h1 className='text-light banner-head'>Kalyana <span style={{ color: '#fd562a' }} > Venkata</span> Ramanan</h1>
                            <h5 className='text-light'>A passionate Full Stack Engineer from Bangalore!</h5>
                            <div className='py-4 my-4'>
                                <button className='banner-bts fw-bold fs-5'>Contact Me in Whatsapp</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 text-center'>
                        <div className='pb-4 mb-4'>
                            <img src={Ramanan} alt="" className='img-fluid rounded-3' />
                        </div>
                    </div>

                </div>
            </section>
            </section>
            {/* Banner-End */}

            {/* Career-Start */}
            <section className='container'>
                <div className='text-center py-4 my-4'>

                    <h3>CAREER OBJECTIVE</h3>
                    <p className='pt-3 mt-2'> An experienced Professional in Functional, Non-Functional, Globalization, UI Testing, API Testing,
                        API Testing, and Automation Testing (Selenium Web driver with JAVA), wants to be associated with a
                        progressive organization that can provide me with a dynamic work sphere, challenging assignments with
                        responsibility that encourage creativity, and keeps in touch with the latest technologies/ trends in
                        the testing field and have an urge and inclination for learning new technologies, a strong work ethic
                        combined with a commitment to excellence in all projects undertaken.</p>

                </div>
            </section>
            {/* Career-End */}


        </section>
    )
}

export default Nav