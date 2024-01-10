import React from 'react'
import { Link } from 'react-router-dom'
import Ramanan from '../Assets/Images/ramananimg.jpg'
import Instaicon from '../Assets/Images/instaicon.png'
import Linkedin from '../Assets/Images/linkedin-icon.png'
import tool from '../Assets/Images/icons8-toolbox-64.png'
import setting from '../Assets/Images/icons8-wired-network-48 (1).png'
import operating from '../Assets/Images/icons8-windows-60.png'
import jira from '../Assets/Images/icons8-jira-60.png'
import git from '../Assets/Images/icons8-git-64.png'
import database from '../Assets/Images/icons8-database-60.png'
import Scroll from './Scroll'
import card1 from '../Assets/Images/cardimg.png'
import card2 from '../Assets/Images/card2img.png'
import card3 from '../Assets/Images/card3img.png'


function Home() {
  return (
    <section>

      {/* Nav-Start */}
      <section className='nav-banner ' id='home'>
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

                <li class="nav-item heading6">
                  <a class="nav-link active px-3" aria-current="page" id='name-nav' href='#home'>Home</a>
                </li>

                <li class="nav-item heading6">
                  <a class="nav-link active px-3 " aria-current="page" id='name-nav' href="#aboutus">About Us</a>
                </li>
                <li class="nav-item heading6">
                  <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#portfolio">Portfolio</a>
                </li>

                <li class="nav-item heading6">
                  <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#technical">Technical</a>
                </li>


                <li class="nav-item heading6">
                  <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#work">Work</a>
                </li>

                <li class="nav-item heading6">
                  <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#testimonial">Testimonial</a>
                </li>

                <li class="nav-item border-end heading6">
                  <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#contact">Contact</a>
                </li>

                <a href='https://www.instagram.com/kalyana_venkata_ramanan/'>
                  <li class="nav-item px-2 pt-1">
                    {/* <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#">oii</a> */}
                    <img src={Instaicon} alt="" className='head-icon' />
                  </li>
                </a>
                <a href='https://www.linkedin.com/in/kalyan-durai-664390274/'>
                  <li class="nav-item pt-1">
                    {/* <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#">oii</a> */}
                    <img src={Linkedin} alt="img-fluid" className='head-icon' />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </nav>
        {/* Nav-End */}

        {/* Banner-Start */}

        <section className='container' id='home'>
          <div className='row py-5 mt-2'>

            <div className='col-md-6 d-flex justify-content-center align-items-center'>
              <div className='text-md-start text-center'>

                <h5 className='text-light heading9 fw-bold fs-5'>Hello, I'm</h5>
                <h1 className='text-light banner-head heading9'>Kalyana <span style={{ color: '#fd562a' }} > Venkata</span> Ramanan</h1>
                <h5 className='text-light heading9 fw-bold fs-5'>A passionate Full Stack Engineer from Bangalore!</h5>
                <div className='py-4 my-4'>
                  <button className='banner-bts fw-bold fs-5 heading5'>Contact Me in Whatsapp</button>
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
      <section className='container' id='aboutus'>
        <div className='text-center py-4 my-4'>

          <h3 className='text-center mb-3 heading6 fs-2 fw-bold mt-3 ' style={{ color: "#fd562a" }}>Career Objective</h3>
          <p className='pt-2 mt-1 heading4'> An experienced Professional in Functional, Non-Functional, Globalization, UI Testing, API Testing,
            API Testing, and Automation Testing (Selenium Web driver with JAVA), wants to be associated with a
            progressive organization that can provide me with a dynamic work sphere, challenging assignments with
            responsibility that encourage creativity, and keeps in touch with the latest technologies/ trends in
            the testing field and have an urge and inclination for learning new technologies, a strong work ethic
            combined with a commitment to excellence in all projects undertaken.</p>

        </div>
      </section>
      {/* Career-End */}

      {/* Technical Start */}
      <section>
        <div className='nav-banner '>
          <div className='technical-skills mt-2'>
            <div className='container my-5 py-5'>

              <div class="tf-heading tf-heading-style-02 mb-5 text-center ">
                <h3 className='text-center heading6 fs-2 fw-bold pt-5 my-3' style={{ color: "#fd562a" }}>Technical Skills</h3>
              </div>
              <div className='row text-center g-3'>
                <div className='col-xl-3 col-lg-4'>
                  <div className='card custom-card p-5 h-100 '>
                    <div className='w-50 mx-auto wrap-icon p-3 rounded-3 mb-3'>
                      <img
                        src={tool}
                        // style={{backgroundColor:"red"}}
                        className="align-items-center  img-fluid"
                        alt=""
                      />
                    </div>
                    <p className='mb-3 heading6'>CI/CD Tools</p>
                    <div className='btn1'>
                      <button className='btn btn-primary px-4 py-2 heading3'>Read More</button>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-4'>
                  <div className='card custom-card p-5 h-100 '>
                    <div className='w-50 mx-auto wrap-icon p-3 rounded-3 mb-3'>
                      <img
                        src={setting}
                        // style={{backgroundColor:"red"}}
                        className="align-items-center  img-fluid"
                        alt=""
                      />
                    </div>
                    <p className='mb-3 heading6'>Frame Work</p>
                    <div className='btn1'>
                      <button className='btn btn-primary px-4 py-2 heading3'>Read More</button>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-4'>
                  <div className='card custom-card p-5 h-100 '>
                    <div className='w-50 mx-auto wrap-icon p-3 rounded-3 mb-3'>
                      <img
                        src={operating}
                        // style={{backgroundColor:"red"}}
                        className="align-items-center  img-fluid"
                        alt=""
                      />
                    </div>
                    <p className='mb-3 heading6'>Operating Systems</p>
                    <div className='btn1'>
                      <button className='btn btn-primary px-4 py-2 heading3'>Read More</button>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-4'>
                  <div className='card custom-card p-5 h-100 '>
                    <div className='w-50 mx-auto wrap-icon p-3 rounded-3 mb-3'>
                      <img
                        src={jira}
                        // style={{backgroundColor:"red"}}
                        className="align-items-center  img-fluid"
                        alt=""
                      />
                    </div>
                    <p className='mb-3 heading6'>Defect Management Tool</p>
                    <div className='btn1'>
                      <button className='btn btn-primary px-4 py-2 heading3'>Read More</button>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-4'>
                  <div className='card custom-card p-5 h-100 '>
                    <div className='w-50 mx-auto wrap-icon p-3 rounded-3 mb-3'>
                      <img
                        src={git}
                        // style={{backgroundColor:"red"}}
                        className="align-items-center  img-fluid"
                        alt=""
                      />
                    </div>
                    <p className='mb-3 heading6'>Version Controlling Tool</p>
                    <div className='btn1'>
                      <button className='btn btn-primary px-4 py-2 heading3'>Read More</button>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-4'>
                  <div className='card custom-card p-5 h-100 '>
                    <div className='w-50 mx-auto wrap-icon p-3 rounded-3 mb-3'>
                      <img
                        src={database}
                        // style={{backgroundColor:"red"}}
                        className="align-items-center  img-fluid"
                        alt=""
                      />
                    </div>
                    <p className='mb-3 heading6'>Database Management</p>
                    <div className='btn1'>
                      <button className='btn btn-primary px-4 py-2 heading3'>Read More</button>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-4'>
                  <div className='card custom-card p-5 h-100 '>
                    <div className='w-50 mx-auto wrap-icon p-3 rounded-3 mb-3'>
                      <img
                        src={setting}
                        // style={{backgroundColor:"red"}}
                        className="align-items-center  img-fluid"
                        alt=""
                      />
                    </div>
                    <p className='mb-3 heading6'>Web Services Testing</p>
                    <div className='btn1'>
                      <button className='btn btn-primary px-4 py-2 heading3'>Read More</button>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-4'>
                  <div className='card custom-card p-5 h-100 '>
                    <div className='w-50 mx-auto wrap-icon p-3 rounded-3 mb-3'>
                      <img
                        src={database}
                        // style={{backgroundColor:"red"}}
                        className="align-items-center  img-fluid"
                        alt=""
                      />
                    </div>
                    <p className='mb-3 heading6'>Automaton Testing </p>
                    <div className='btn1 heading3'>
                      <button className='  btn btn-primary px-4 py-2 '>Read More</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </section>
      {/* Technical end */}

      {/* portfolio start */}
      <section id='portfolio' className='m-5'>
        <div className="container">
          <h3 className='heading7' style={{ color: "#FD562A" }}>  ABOUT ME</h3>
          <h2 className='fs-25 fw-bolder heading6 fs-2 fw-bold '> Full Stack Engineer </h2>
          <div className="row">

            <div className="col-md-5">
              <img src="https://kvramanan.com/wp-content/uploads/2023/06/Photo_Kalyanan-Venkata-Ramanan.jpg" className='img-fluid' alt="" />

            </div>
            <div className="col-md-7 heading5">
              <ul>
                <li>Over 9+ years of IT experience which includes 3+ years of Extensive experience as  a React JS Developer and 4+ years of Experience as a Django Developer and 2+ years of Experience as software Tester.</li>
                <li>Expertise in React JS framework to develop the SPA. Experienced in React JS and working with React Flux architecture.</li>
                <li>Experienced in working with Redux architecture using complex Object-Oriented concepts in improving the performance of the websites.</li>
                <li>Experienced in Creating the EC2 instances and Deploying of SPA on the AWSS3 bucket in Amazon web services.</li>
                <li>Expertise in EC2 Backup methods, ELB security and application logging using Cloud Trail integration with Kibana and Elastic search</li>
                <li>Experience on high-availability, fault tolerance, and auto-scaling in AWS Cloud formation. Experienced in creating the instances and deploying through Command Line Interface configuration.</li>
                <li>Experience in using React JS components, Forms, Events, Keys, Router, plusRedux, Animations and Flux concept.</li>
                <li>Extensive experience in developing web pages using</li>
                <li>HTML/HTML5, XML, DHTMLCSS/CSS3, SASS, LESS, JavaScript, React JS, Redux, Flex, AngularJS, JQuery, JSON, NodeJS, Ajax, JQUERY, Bootstrap.</li>
                <li>Experienced in MERN stack development MongodB, Express, Node, and ReactJS. Experience in all phase of SDLC like Requirement Analysis, Implementation and Maintenance, and extensive experience with Agile and SCRUM.</li>

                <li>Good Expertise in analysing the Document Object Model (DOM) Layout, DOM Functions, and JavaScript functions, Cascading Styles across cross-browser using Fire Bug, Developer Tool Bar.</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      {/* portfolio end */}

      {/* project start */}

      <section className='pt-5 m-5'>
        <div className='technical-skills'>
          <div className='container'>

            <div class=" mb-5 text-center">
              <h3 className='text-center mb-3 heading6 fs-2 fw-bold mt-3 ' style={{ color: "#fd562a" }}>WORK PROJECTS</h3>

            </div>
            <div className='row'>

              <div className='col-md-4'>
                <Link to="/Adorama" className='text-decoration-none'>
                  <div className='card custom-card2 px-2 py-2 rounded-4'>
                    <div className=''>
                      <img src={card1} className='img-fluid rounded-4' alt="" />
                    </div>

                    <h3 className='heading7 pt-4 pb-3 fs-4' style={{ color: "#222" }}>  Adorama</h3>


                  </div>
                </Link>
              </div>


              <div className='col-md-4'>
                <Link to='/Bny' className='text-decoration-none'>
                  <div className='card custom-card2 px-2 py-2 rounded-4'>
                    <div className=''>
                      <img src={card2} className='img-fluid rounded-4' alt="" />
                    </div>

                    <h3 className='heading7 pt-4 pb-3 fs-4' style={{ color: "#222" }}> BNY Melon</h3>


                  </div>
                </Link>
              </div>

              <div className='col-md-4 '>
                <Link to='/Airpaz' className='text-decoration-none'>
                  <div className='card custom-card2 px-2 py-2 rounded-4'>
                    <div className=''>
                      <img src={card3} className='img-fluid rounded-4' alt="" />
                    </div>

                    <h3 className='heading7 pt-4 pb-3 fs-4' style={{ color: "#222" }}> Airpaz</h3>


                  </div>
                </Link>
              </div>


            </div>
          </div>

        </div>

      </section>

      {/* project end */}

      {/* Technical details start */}
      <section id='technical'>
        <div className="overflow-hidden">
          <div className="details-bg">
            <div className="container py-5">
              <h1 className="text-center text-md-center text-light ">
                <h3 className='text-center mb-3 heading6 fs-2 fw-bold mt-3 ' style={{ color: "#fd562a" }}> Technical Details</h3>
              </h1>
              <div className="row justify-content-between py-5">
                <div className="col-md-6 col-lg-4 mt-md-3 rounded-5 details-card-bg   ">
                  <div className="text-light p-3 mb-3  mb-md-0">
                    <h4 className="details-heading heading7">Automation Testing Tools</h4>
                    <p className='heading9'>Selenium Web driver, Rest Assured</p>
                    <h4 className="details-heading heading7">Frame work</h4>
                    <p className='heading9'>Cucumber, TestNG</p>
                    <h4 className="details-heading heading7">Database</h4>
                    <p className='heading9'>MySQL, Oracle SQL, Mongo DB</p>
                    <h4 className="details-heading heading7">Defect Management tool</h4>
                    <p className='heading9'>JIRA, HPALM</p>
                  </div>
                </div>
                <div className=" col-md-6 col-lg-4 mt-md-3">
                  <div className="text-light p-3  mb-3 mb-md-0">
                    <img
                      src="https://kvramanan.com/wp-content/uploads/elementor/thumbs/html-css-collage-concept-with-person-1-min-scaled-qbs1zz26ugyn2fal36cdw9lf9thhit4z5ajhmtd9ck.jpg"
                      className="img-fluid rounded-4"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 details-card-bg rounded-5 mt-md-3">
                  <div className="text-light p-3  mb-3 mb-md-0">
                    <h4 className="details-heading heading7">Languages</h4>
                    <p className='heading9'> JAVA, Python</p>
                    <h4 className="details-heading heading7">Frame work</h4>
                    <p className='heading9'>Git, Github and Bitbucket</p>
                    <h4 className="details-heading heading7">Database</h4>
                    <p className='heading9'>Jenkins, Docker</p>
                    <h4 className="details-heading heading7">Operating Systems</h4>
                    <p className='heading9'>Windows and Linux</p>
                    <h4 className="details-heading heading7">Web Services Testing Tools</h4>
                    <p className='heading9'>Postman, Postman, Rest Assured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Technical details end */}

      {/* experience start */}
      <section className="container-fluid" id='work'>
        <h3 className='text-center heading6 fs-2 fw-bold pt-5 my-3 ' style={{ color: "#fd562a" }}>Best Working Experience</h3>

        <div className="row  mt-5 pt-5 ">
          <div className="col-lg-6 col-12 align-items-center ">
            <img
              src="https://kvramanan.com/wp-content/uploads/2022/12/feature-photo-6.png"
              className="img-fluid mb-4"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-sm-12  rounded-5">

            <div className="">
              <div className="text-center text-md-center">


              </div>
              <div className="row mb-5 mb-md-3 mb-sm-3 justify-content-around">
                <div className="col-10  rounded-4 exp-card">
                  <div className='py-3 px-3'>
                    <h3 className='heading7' style={{ color: "#FD562A" }}> Software Engineer</h3>
                    <p className='heading6'>
                      Mapps Info tech Private Limited, November 2018 - March 2023
                      Chennai
                    </p>  
                    <div className="btn1 text-center text-lg-start">
                      <button className="btn btn-primary px-4 py-2 heading3">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-5 mb-md-3 mb-sm-3 justify-content-around">
                <div className="col-10 rounded-4 exp-card ">
                  <div className='py-3 px-3'>
                    <h3 className='heading7' style={{ color: "#FD562A" }}>Associate Software Engineer</h3>
                    <p className='heading6'>
                      Appright Software Solutions Pvt Ltd, February 2014 -
                      November 2018 Bengaluru
                    </p>
                    <div className="btn1 text-center text-lg-start">
                      <button className="btn btn-primary px-4 py-2 heading3 text-center">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-5 mb-md-3 mb-sm-3 justify-content-around">
                <div className="col-10  rounded-4 exp-card">
                  <div className='py-3 px-3'>
                    <h3 className='heading7 ' style={{ color: "#FD562A" }}> Software Test Engineer</h3>
                    <p className='heading6'>
                      Valley Info systems Pvt Ltd, May - 2014 to till date in
                      Benagluru
                    </p>
                    <div className="btn1 text-center text-lg-start">
                      <button className="btn btn-primary px-4 py-2 heading3 ">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* experience end */}



      {/* work start */}
      {/* work end */}

      <Scroll />


    </section>
  )
}

export default Home