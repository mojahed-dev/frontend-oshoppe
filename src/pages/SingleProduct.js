import React, { useState } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';


function SingleProduct() {
    const props = { 
        width: 400, 
        height: 500, 
        zoomWidth: 500, 
        img: "https://img.freepik.com/premium-photo/closeup-shot-modern-wristwatch-white-background_181624-57800.jpg?w=740" 
    };
    const [orderedProduct, setOrderedProduct] = useState(true);
    return (
        <>
            <Meta title={"Dynamic Product Name"} />
            <BreadCrumb title="Dynamic Product Name" />

            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                                <div className="other-product-images d-flex flex-wrap gap-15">
                                    <div><img src="https://img.freepik.com/premium-photo/closeup-shot-modern-wristwatch-white-background_181624-57800.jpg?w=740" alt="product image" /></div>
                                    <div><img src="https://img.freepik.com/premium-photo/closeup-shot-modern-wristwatch-white-background_181624-57800.jpg?w=740" alt="product image" /></div>
                                    <div><img src="https://img.freepik.com/premium-photo/closeup-shot-modern-wristwatch-white-background_181624-57800.jpg?w=740" alt="product image" /></div>
                                    <div><img src="https://img.freepik.com/premium-photo/closeup-shot-modern-wristwatch-white-background_181624-57800.jpg?w=740" alt="product image" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className='border-bottom'>
                                    <h3 className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, harum?</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="description-wrapper py-5 home-wrapper-2">
                        <div className="container-xxl">
                            <div className="row">
                                <div className="col-12">
                                    <h4>Description</h4>
                                    <div className='bg-white p-3'>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eligendi quos excepturi explicabo at voluptates, nisi exercitationem. Iusto sed deserunt voluptatem ipsam, debitis porro fugit placeat corporis id, minima itaque?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <section className="reviews-wrapper pb-5 home-wrapper-2">
                        <div className="container-xxl">
                            <div className="row">
                                <div className="col-12">
                                    <h3>Reviews</h3>
                                    <div className="review-inner-wrapper">
                                        <div className="review-head d-flex justify-content-between align-items-end">
                                            <div>
                                                <h4 className='mb-2'>Customer Reviews</h4>
                                                <div className="d-flex gap-10 align-items-center">
                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        value="3"
                                                        edit={false}
                                                        activeColor="#ffd700"
                                                    />
                                                    <p className='mb-0'>Based on 2 reviews</p>
                                                </div>
                                            </div>
                                            {
                                                orderedProduct && (
                                                    <div>
                                                        <a href="" className='text-decoration-underline'>Write a Review</a>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="review-form py-4">
                                            <h4>Write a review</h4>
                                            <form action="" className='d-flex flex-column gap-15 py-4'>
                                                <div>
                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        value="3"
                                                        edit={true}
                                                        activeColor="#ffd700"
                                                    />
                                                </div>
                                                {/* <div>
                                                    <input type="text" className="form-control" placeholder='Name' />
                                                </div>
                                                <div>
                                                    <input type="email" className="form-control" placeholder='Email' />
                                                </div>
                                                <div>
                                                    <input type="tel" className="form-control" placeholder='Mobile number' />
                                                </div> */}
                                                <div>
                                                    <textarea name="" id="" className='w-100 form-control' cols="30" rows="10" placeholder='Comments'></textarea>
                                                </div>
                                                <div className='d-flex justify-content-end'>
                                                    <button className="button border-0">Submit Review</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="reviews mt-4">
                                            <div className="review">
                                                <div className="d-flex gap-10 align-items-center">
                                                    <h6 className='mb-0'>John Doe</h6>
                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        value="3"
                                                        edit={false}
                                                        activeColor="#ffd700"
                                                    />
                                                </div>
                                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam necessitatibus error tenetur recusandae? Officiis placeat excepturi eligendi reprehenderit numquam similique.</p>

                                            </div>
                                            <div className="review">
                                                <div className="d-flex gap-10 align-items-center">
                                                    <h6 className='mb-0'>Mojahed</h6>
                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        value="3"
                                                        edit={false}
                                                        activeColor="#ffd700"
                                                    />
                                                </div>
                                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam necessitatibus error tenetur recusandae? Officiis placeat excepturi eligendi reprehenderit numquam similique.</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="popular-wrapper py-5 home-wrapper-2">
                        <div className="container-xxl">
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="section-heading">Popular Products</h3>
                                </div>
                                <ProductCard />
                            </div>
                        </div>
                    </section>
                </div>
            </div>


        </>
    )
}

export default SingleProduct