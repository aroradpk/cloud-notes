import React from 'react';
import avatar from "../avatar.png"

const About = () => {


  return (
    <>
      <div className="bg-light">
  <div className="container">
    <div className="row h-100 align-items-center py-5">
      <div className="col-lg-6">
        <h1 className="display-4">CloudNotes</h1>
       
      </div>
      <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid" /></div>
    </div>
  </div>
</div>

<div className="bg-white py-5">
  <div className="container py-5">
    <div className="row align-items-center mb-5">
      <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light">Store your notes on the cloud</h2>
        <p className="font-italic text-muted mb-4">Access your notes anywhere on the go</p>
      </div>
      <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
      <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 className="font-weight-light">Use it as you like</h2>
        <p className="font-italic text-muted mb-4">Whether it is for task completion, midnight ideas, important information and it goes on...</p>
      </div>
    </div>
  </div>
</div>

<div className="bg-light ">
  <div className="container py-3">
    <div className="row mb-4">
      <div className="col-lg-5">
        <h2 className="display-4 font-weight-light">Our team</h2>
        <p className="font-italic text-muted">Made in India with love</p>
      </div>
    </div>

    <div className="row text-center">
      
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src={avatar} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
          <h5 className="mb-0">Deepak Arora</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="https://www.facebook.com" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href="https://www.twitter.com" className="social-link"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="https://www.instagram.com" className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="https://www.linkedin.in" className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
     


    </div>
  </div>
</div>


<footer className="bg-light pb-5">
  <div className="container text-center">
    <p className="font-italic text-muted mb-0">&copy; Copyrights CloudNotes All rights reserved.</p>
  </div>
</footer>
    </>
  )
}

export default About
