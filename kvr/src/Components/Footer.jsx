import React from 'react'
import Locationicon from '../Assets/Images/location-icon.png'

function Footer() {
    return (
        <section className='container'>
            <div className='py-3 my-3'>
            <div className='text-center'>
                <h1>GET IN TOUCH</h1>
            </div>
            <div className='row py-4 my-4'>
                <div className='col-lg-4'>
                    <div className='d-flex '>
                        <div className='me-3'>
                            <img src={Locationicon} alt="" className='img-fluid career-icon' />
                        </div>
                        <div>
                            <h3 className='fw-bolder'>Address</h3>
                            <p>349-350 KA, Sreenivasa Nagar, Vallalkaari Street, Madipakkam, Kancheepuram.</p>
                            <div className='btn1'>
                                    <button className='btn btn-primary px-4 py-2'>Read More</button>
                                </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='d-flex '>
                        <div className='me-3'>
                            <img src={Locationicon} alt="" className='img-fluid career-icon' />
                        </div>
                        <div>
                            <h3 className='fw-bolder pt-1'>Phone</h3>
                            <p className='pt-2 mt-2 fs-4'>90 92 57 04 89</p>
                            <div className='btn1'>
                                    <button className='btn btn-primary px-4 py-2'>Read More</button>
                                </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='d-flex '>
                        <div className='me-3'>
                            <img src={Locationicon} alt="" className='img-fluid career-icon' />
                        </div>
                        <div>
                            <h3 className='fw-bolder pt-1'>E-Mail</h3>
                            <p className='pt-2 mt-2 fs-5'>kalyanaramanan66@gmail.com</p>
                            <div className='btn1 pt-2'>
                                    <button className='btn btn-primary px-4 py-2'>Read More</button>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </section>
    )
}

export default Footer