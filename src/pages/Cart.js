import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import watchImg from '../images/watch.jpg';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

function Cart() {
    return (
        <>
            <Meta title={"Cart"} />
            <BreadCrumb title="Cart" />

            <section className="cart-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                                <h4 className='cart-col-1'>Product</h4>
                                <h4 className='cart-col-2'>Price</h4>
                                <h4 className='cart-col-3'>Quantity</h4>
                                <h4 className='cart-col-4'>Total</h4>
                            </div>
                            <div className="cart-data py-3 d-flex justify-content-between align-items-center mb-2">
                                <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                    <div className='w-25'>
                                        <img src={watchImg} className='img-fluid' alt="product image" />
                                    </div>
                                    <div className='w-75'>
                                        <h5 className='price'>Lorem, ipsum dolor.</h5>
                                        <p>Size: L</p>
                                        <p>Color: Black</p>
                                    </div>
                                </div>
                                <div className='cart-col-2'>
                                    <h5 className="price">$ 100</h5>
                                </div>
                                <div className='cart-col-3 d-flex align-items-center gap-15'>
                                    <div>
                                        <input
                                            className='form-control'
                                            type="number"
                                            name=""
                                            id=""
                                            min={1}
                                            max={10}
                                        />
                                    </div>
                                    <div>
                                    <MdDelete className='text-danger fs-5' />
                                    </div>
                                </div>
                                <div className='cart-col-4'>
                                    <h5 className="price">$ 100</h5>
                                </div>
                            </div>
                            <div className="cart-data py-3 d-flex justify-content-between align-items-center mb-2">
                                <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                    <div className='w-25'>
                                        <img src={watchImg} className='img-fluid' alt="product image" />
                                    </div>
                                    <div className='w-75'>
                                        <h5 className='price'>Lorem, ipsum dolor.</h5>
                                        <p>Size: M</p>
                                        <p>Color: White</p>
                                    </div>
                                </div>
                                <div className='cart-col-2'>
                                    <h5 className="price">$ 100</h5>
                                </div>
                                <div className='cart-col-3 d-flex align-items-center gap-15'>
                                    <div>
                                        <input
                                            className='form-control'
                                            type="number"
                                            name=""
                                            id=""
                                            min={1}
                                            max={10}
                                        />
                                    </div>
                                    <div>
                                        <MdDelete className='text-danger fs-5' />
                                    </div>
                                </div>
                                <div className='cart-col-4'>
                                    <h5 className="price">$ 100</h5>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 py-2">
                           <div className="d-flex justify-content-between align-items-baseline">
                                <Link to="/product" className="button">Continue Shopping</Link>
                                <div className='d-flex flex-column  align-items-end'>
                                    <h4>Subtotal: $ 1000</h4>
                                    <p>Taxes and Shipping calculated at checkout</p>
                                    <Link to="/checkout" className='button'>Checkout</Link>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart