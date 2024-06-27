import React, { useState } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { GoGitCompare } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import Container from '../components/Container';


function SingleProduct() {
    const props = {
        width: 400,
        height: 600,
        zoomWidth: 600,
        img: "https://img.freepik.com/premium-photo/closeup-shot-modern-wristwatch-white-background_181624-57800.jpg?w=740"
    };

    const [orderedProduct, setOrderedProduct] = useState(true);

    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }

    return (
        <>
            <Meta title={"Dynamic Product Name"} />
            <BreadCrumb title="Dynamic Product Name" />

            <Container class1="main-product-wrapper py-5 home-wrapper-2">
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
                                <div className="border-bottom">
                                    <p className="price">$ 100</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value="3"
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0 t-review'>(2 reviews)</p>

                                    </div>
                                    <a href="#review" className="review-btn">Write a review</a>
                                </div>
                                <div className="border-bottom">
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Type:</h3>
                                        <p className='product-data'>watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Brand:</h3>
                                        <p className='product-data'>Havells</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Category:</h3>
                                        <p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Tags:</h3>
                                        <p className='product-data'>watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Availability:</h3>
                                        <p className='product-data'>In Stock</p>
                                    </div>
                                    <div className='d-flex gap-10 flex-column mt-2 mb-2'>
                                        <h3 className='product-heading'>Size:</h3>
                                        <div className="d-flex flex-wrap gap-15">
                                            <span className="badge border border-1 bg-white text-dark border-secondary">S </span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">M </span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">L </span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">XXL </span>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-10 flex-column mt-2 mb-2'>
                                        <h3 className='product-heading'>Color:</h3>
                                        <p className='product-data'><Color /></p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center gap-15 flex-row mt-2 mb-2'>
                                        <h3 className='product-heading'>Quantity:</h3>
                                        <div>
                                            <input
                                                type="number"
                                                name=""
                                                min={1}
                                                max={10}
                                                style={{ width: "70px" }}
                                                id=""
                                                className='form-control'
                                            />
                                        </div>
                                        <div className='d-flex align-items-center gap-30 ms-5'>
                                            <button className='button border-0' type='submit'>Add To Cart</button>
                                            <button to="/signup" className='button signup'>Buy It Now</button>

                                        </div>

                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <div>
                                            <a href="#"> <GoGitCompare className='fs-5 me-2' />Add to compare</a>
                                        </div>
                                        <div><a href="#"><FaRegHeart className='fs-5 me-2 ms-2' />Add to Wishlist</a></div>
                                    </div>
                                    <div className='d-flex gap-10 flex-column mt-3 my-3'>
                                        <h3 className='product-heading'>Shipping & Returns:</h3>
                                        <p className='product-data'>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem illo pariatur, facilis nihil voluptatum?
                                        </p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-3'>
                                        <h3 className='product-heading'>Copy product link:</h3>
                                       <a href="javascipt:void(0);" onClick={() => copyToClipboard("https://img.freepik.com/premium-photo/closeup-shot-modern-wristwatch-white-background_181624-57800.jpg?w=740")}>Copy Product Link </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <Container class1="description-wrapper py-5 home-wrapper-2">
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

                    </Container>

                    <Container id='review' class1="reviews-wrapper pb-5 home-wrapper-2">
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
                    </Container>

                    <Container class1="popular-wrapper py-5 home-wrapper-2">
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="section-heading">Popular Products</h3>
                                </div>
                                <ProductCard />
                            </div>
                    </Container>
            </Container>


        </>
    )
}

export default SingleProduct