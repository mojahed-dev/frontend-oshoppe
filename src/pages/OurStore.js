import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb';
import { Helmet } from 'react-helmet';
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import { useLocation } from 'react-router-dom';
import Color from '../components/Color';
import Container from '../components/Container';


// Custom wrapper for ReactStars
function CustomReactStars({
    count = 5,
    size = 24,
    value = 3,
    edit = true,
    activeColor = "#ffd700",
    ...props
}) {
    return (
        <ReactStars
            count={count}
            size={size}
            value={value}
            edit={edit}
            activeColor={activeColor}
            {...props}
        />
    );
}

function OurStore() {
    const [grid, setGrid] = useState(4);
    const [sortOption, setSortOption] = useState("best-selling"); // Initialize sortOption state

    return (
        <>
            <Meta title={"Our Store"} />
            <BreadCrumb title="Our Store" />
            <Container class1="store-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Shop by Categories
                                </h3>
                                <div className="">
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>TV</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Filter By
                                </h3>
                                <div>
                                    <h5 className="sub-title">Availability</h5>
                                    <div>
                                        <div className="form-check">
                                            <input className='form-check-input' type="checkbox" value="" id='' />
                                            <label htmlFor="" className="form-check-label">In Stock (1)</label>
                                        </div>
                                        <div className="form-check">
                                            <input className='form-check-input' type="checkbox" value="" id='' />
                                            <label htmlFor="" className="form-check-label">Out of Stock (0)</label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Price</h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="from" />
                                            <label htmlFor="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="to" />
                                            <label htmlFor="floatingInput">To</label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Colors</h5>
                                    <div>
                                        <div className="f-flex flex-wrap">
                                            <Color />
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Size</h5>
                                    <div>
                                        <div className="form-check">
                                            <input className='form-check-input' type="checkbox" value="" id='color-1' />
                                            <label htmlFor="" className="form-check-label">S (2)</label>
                                        </div>
                                        <div className="form-check">
                                            <input className='form-check-input' type="checkbox" value="" id='color-2' />
                                            <label htmlFor="" className="form-check-label">M (2)</label>
                                        </div>
                                        <div className="form-check">
                                            <input className='form-check-input' type="checkbox" value="" id='color-3' />
                                            <label htmlFor="" className="form-check-label">L (2)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Product Tags
                                </h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Random Products
                                </h3>
                                <div>
                                    <div className="random-products mb-3 d-flex">
                                        <div className="w-50">
                                            <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                                        </div>
                                        <div className="w-50">
                                            <h5>Lorem ipsum dolor sit amet.</h5>
                                            <CustomReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$100.00</b>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex">
                                        <div className="w-50">
                                            <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                                        </div>
                                        <div className="w-50">
                                            <h5>Lorem ipsum dolor sit amet.</h5>
                                            <CustomReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$100.00</b>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="col-9">
                            <div className="filter-sort-grid">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className="d-flex align-items-center gap-10">
                                        <p className='mb-0 d-block' style={{ width: "110px" }}>Sorted By</p>
                                        <select
                                            className='form-control form-select'
                                            value={sortOption} // Use value instead of selected
                                            onChange={(e) => setSortOption(e.target.value)} // Handle change
                                        >
                                            <option value="featured">Featured</option>
                                            <option value="best-selling">Best Selling</option>
                                            <option value="title-ascending">Alphabetically, A-Z</option>
                                            <option value="title-descending">Alphabetically, A-Z</option>
                                            <option value="price-ascending">Price, low to high</option>
                                            <option value="price-descending">Price, high to low</option>
                                            <option value="created-ascending">Date, old to new</option>
                                            <option value="created-descending">Date, new to old</option>


                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="totalproducts mb-0">21 Products</p>
                                        <div className="d-flex gap-10 align-items-center grid">
                                            <img onClick={() => {
                                                setGrid(3)
                                            }} src="images/gr4.svg" className='d-block img-fluid' alt="grid" />
                                            <img onClick={() => {
                                                setGrid(4)
                                            }} src="images/gr3.svg" className='d-block img-fluid' alt="grid" />
                                            <img onClick={() => {
                                                setGrid(6)
                                            }} src="images/gr2.svg" className='d-block img-fluid' alt="grid" />
                                            <img onClick={() => {
                                                setGrid(12)
                                            }} src="images/gr.svg" className='d-block img-fluid' alt="grid" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="product-list pb-5">
                                <div className="d-flex gap-15 flex-wrap mt-4">
                                    <ProductCard grid={grid} />
                                </div>
                            </div>

                        </div>
                    </div>
            </Container>

        </>
    )
}

export default OurStore