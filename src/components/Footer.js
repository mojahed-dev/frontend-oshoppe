import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs';
import newsletterImg from "../images/newsletter.png";

function Footer() {
    return (
        <>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <img src={newsletterImg} alt="newsletter" />
                                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Your email address"
                                    aria-label="Your email address"
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-2" id="basic-addon2">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className='text-white mb-4'>Contact Us</h4>
                            <div>
                                <address className='text-white fs-6'>123 Main Street, Barangay San Antonio
Quezon City, Metro Manila 1105
Philippines</address>
                                <a href="tel:+456446446544" className="mt-3 d-block mb-1 text-white">+456446446544</a>
                                <a href="mailto:mojahed@gmail.com" className="mt-4 d-block mb-0 text-white">mojahed.alo.habib@gmail.com</a>
                                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                                    <a href=""><BsLinkedin className='text-white fs-4' /></a>
                                    <a href=""><BsInstagram className='text-white fs-4' /></a>
                                    <a href=""><BsGithub className='text-white fs-4' /></a>
                                    <a href=""><BsYoutube className='text-white fs-4' /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='text-white mb-4'>Information</h4>
                            <div className='footer-Links d-flex flex-column'>
                                <Link to='/privacy-policy' className='text-white py-2 mb-1'>Privacy Policy</Link>
                                <Link to="/refund-policy" className='text-white py-2 mb-1'>Refund Policy</Link>
                                <Link to='/terms-and-conditions' className='text-white py-2 mb-1'>Terms & Conditions</Link>
                                <Link to="/blog" className='text-white py-2 mb-1'>Blogs</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='text-white mb-4'>Account</h4>
                            <div className='footer-Links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>About Us</Link>
                                <Link className='text-white py-2 mb-1'>Faq</Link>
                                <Link className='text-white py-2 mb-1'>Contact</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className='text-white mb-4'>Quick Links</h4>
                            <div className='footer-Links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Laptops</Link>
                                <Link className='text-white py-2 mb-1'>headphones</Link>
                                <Link className='text-white py-2 mb-1'>Tablets</Link>
                                <Link className='text-white py-2 mb-1'>Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">&copy; {new Date().getFullYear()}; Developed by Mojahed Habib</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;