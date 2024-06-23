import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaInfo } from "react-icons/fa";

function Contact() {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />

      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7850.274752909304!2d123.907266!3d10.33088935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999218ad96ccd%3A0x73cd2c6cb520d2c!2sCebu%20IT%20Park%2C%20Cebu%20City%2C%206000%20Cebu!5e0!3m2!1sen!2sph!4v1719154668412!5m2!1sen!2sph" width="600" height="450" className='border-0 w-100' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact Us</h3>
                <form action="" className='d-flex flex-column gap-15'>
                  <div>
                    <input type="text" className="form-control" placeholder='Name' />
                  </div>
                  <div>
                    <input type="email" className="form-control" placeholder='Email' />
                  </div>
                  <div>
                    <input type="tel" className="form-control" placeholder='Mobile number' />
                  </div>
                  <div>
                    <textarea name="" id="" className='w-100 form-control' cols="30" rows="10" placeholder='Comments'></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <FaHome className='fs-5' />
                      <address className='mb-0'>dito lang sa tabi tabi St.</address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <FaPhoneAlt className='fs-5' />
                      <a href="tel:+960393847447">960393847447</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <IoMail className='fs-5' />
                      <a href="mailto:mojahed.alo.habib@gmail.com">mojahed.alo.habib@gmail.com</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <FaInfo className='fs-5' />
                      <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact