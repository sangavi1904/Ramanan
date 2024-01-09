import React from "react";

function Details() {
  return (
    <div className="details-bg ">
      <section className="container py-5">
        <h1 className="text-center text-md-center details-heading">
          Technical Details
        </h1>
        <div className="row justify-content-between py-5">
          <div className="col-md-6 col-lg-4">
          <div className="text-light p-3 mb-3 mb-md-0" >
          <h4 className="">Automation Testing Tools</h4>
              <p>Selenium Web driver, Rest Assured</p>
              <h4 className="">Frame work</h4>
              <p>Cucumber, TestNG</p>
              <h4 className="">Database</h4>
              <p>MySQL, Oracle SQL and Mongo DB</p>
              <h4 className="">Defect Management tool</h4>
              <p>JIRA, HPALM</p>
            </div>
          </div>
          <div className=" col-md-6 col-lg-4">
          <div className="text-light p-3  mb-3 mb-md-0" >
              <img
                src="https://kvramanan.com/wp-content/uploads/elementor/thumbs/html-css-collage-concept-with-person-1-min-scaled-qbs1zz26ugyn2fal36cdw9lf9thhit4z5ajhmtd9ck.jpg"
                className="img-fluid rounded-4"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
          <div className="text-light p-3 mb-3 mb-md-0" >
              <h4 className="">Languages</h4>
              <p> 🔶 JAVA, Python</p>
              <h4 className="">Frame work</h4>
              <p>Git, Github and Bitbucket</p>
              <h4 className="">Database</h4>
              <p>Jenkins, Docker</p>
              <h4 className="">Operating Systems</h4>
              <p>Windows and Linux</p>
              <h4 className="">Web Services Testing Tools</h4>
              <p>Postman, Rest AssuredPostman, Rest Assured</p>
            </div>
         
          </div>
        </div>
      </section>
    </div>
  );
}

export default Details;
