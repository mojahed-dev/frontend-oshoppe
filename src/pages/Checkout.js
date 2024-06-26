import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from "react-icons/io5";
import watchImg from "../images/watch.jpg";

function Checkout() {
    return (
        <>
            <div className="checkout-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3 className="website-name">DigiDrift</h3>
                                <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item total-price">
                                            <Link to="/cart" className='text-dark'>Cart</Link>
                                        </li>
                                        &nbsp; /
                                        <li class="breadcrumb-item active" aria-current="page">Information</li>
                                        &nbsp; /
                                        <li class="breadcrumb-item">
                                            <Link className='text-dark' href="#">Shipping</Link>
                                        </li>
                                        &nbsp; /
                                        <li class="breadcrumb-item total-price active" aria-current="page">Payment</li>
                                    </ol>
                                </nav>
                                <h4 className="title total-price">
                                    Contact Information
                                </h4>
                                <p className="user-detail total">Mojahed Habib (mojahed.alo.habib@gmail.com)</p>
                                <h4 className='mb-3'>Shipping Address</h4>
                                <form action="" className='d-flex flex-wrap gap-15  justify-content-between'>
                                    <div className='w-100'>
                                        <select name="" id="" className='form-control form-select'>
                                            <option value="" selected disabled>Select Country</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" className="form-control" placeholder='First name' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" className="form-control" placeholder='Last name' />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" className="form-control" placeholder='Address' />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" className="form-control" placeholder='Apartment, suite, etc' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" className="form-control" placeholder='City' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <select
                                            name="" id="" className='form-control form-select'>
                                            <option value="" selected disabled>Select State</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" className="form-control" placeholder='zip code' />
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link to='/cart' className='text-dark'><IoArrowBackOutline className='me-2' /> Return to cart</Link>
                                            <Link to='#' className='button'>Continue to Shipping</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className='border-bottom py-4'>
                                <div className="d-flex gap-10 mb-2 align-items-center ">
                                        <div className='w-75 d-flex gap-10 align-items-center'>
                                            <div className='w-25 position-relative'>
                                                <span className="badge bg-secondary text-white rounded-circle p-2 position-absolute" style={{"top": "-10px", "right": "2px"}}>1</span>
                                                <img src={watchImg} alt="product item" className='img-fluid' />
                                            </div>
                                            <div>
                                                <h5 className="title total-price">Lorem ipsum dolor sit amet.</h5>
                                                <p className='total-price'>#ek4wlj</p>
                                            </div>
                                        </div>
                                        <div className='flex-grow-1'>
                                            <h5>$ 100</h5>
                                        </div>
                                </div>
                            </div>
                            <div className='border-bottom py-4'>
                                <div className='d-flex justify-content-between align-nav-item mb-0'>
                                    <p className='total'>Subtotal</p>
                                    <p className='total-price'>$ 10000</p>
                                </div>
                                <div className='d-flex justify-content-between align-nav-item mb-0'>
                                    <p className='mb-0 total'>Shipping</p>
                                    <p className='mb-0 total-price'>$ 10000</p>
                                </div>

                            </div>
                            <div className='d-flex justify-content-between align-nav-item py-4'>
                                <h4 className='total'>Total</h4>
                                <h5 className='totat-price'>$ 10000</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout