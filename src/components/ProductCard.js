import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import headphone from "../images/headphone.jpg";
import prodcompare from "../images/prodcompare.svg";
// import CustomReactStars from './CustomReactStars';



function ProductCard(props) {
  let location = useLocation();
  console.log(location);
  const {grid} = props;
  return (
    <>
    <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"} `}>
      <Link 
        to={`${
          location.pathname == '/' 
            ? "product/:id" 
            : location.pathname == "/product/:id"  
            ? "/product/:id" 
            : ":id"
          }`}  
          className="product-card position-relative"
      >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
        <div className="product-image">
          <img src={watch} className='img-fluid' alt="product image" />
          <img src={headphone} className='img-fluid' alt="product image" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, nam.
          </h5>
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quibusdam expedita aspernatur laboriosam iure libero molestias repellat odit sapiente maiores.
          </p>
          <p className="price">$100.00</p>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor={'#ffd700'}
            />
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className='border-0 bg-transparent'>
                <img src={prodcompare} alt="compare" />
              </button>
              <button className='border-0 bg-transparent'>
                <img src={view} alt="view" />
              </button>
              <button className='border-0 bg-transparent'>
                <img src={addcart} alt="add cart" />
              </button>
            </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"} `}>
    <Link 
        to={`${
          location.pathname == '/' 
            ? "product/:id" 
            : location.pathname == "/product/:id"  
            ? "/product/:id" 
            : ":id"
          }`}  
          className="product-card position-relative"
      >
          <div className="wishlist-icon position-absolute">
            <button className='border-0 bg-transparent'>
              <img src="images/wish.svg" alt="wishlist" />
            </button>
          </div>
        <div className="product-image">
          <img src="images/watch.jpg" className='img-fluid' alt="product image" />
          <img src="images/headphone.jpg" className='img-fluid' alt="product image" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, nam.
          </h5>
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quibusdam expedita aspernatur laboriosam iure libero molestias repellat odit sapiente maiores.
          </p>
          <p className="price">$100.00</p>
          <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor={'#ffd700'}
            />
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className='border-0 bg-transparent'>
                <img src="images/prodcompare.svg" alt="compare" />
              </button>
              <button className='border-0 bg-transparent'>
                <img src="images/view.svg" alt="view" />
              </button>
              <button className='border-0 bg-transparent'>
                <img src="images/add-cart.svg" alt="add cart" />
              </button>
            </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"} `}>
    <Link 
        to={`${
          location.pathname == '/' 
            ? "product/:id" 
            : location.pathname == "/product/:id"  
            ? "/product/:id" 
            : ":id"
          }`}  
          className="product-card position-relative"
      >
          <div className="wishlist-icon position-absolute">
            <button className='border-0 bg-transparent'>
              <img src="images/wish.svg" alt="wishlist" />
            </button>
          </div>
        <div className="product-image">
          <img src="images/watch.jpg" className='img-fluid' alt="product image" />
          <img src="images/headphone.jpg" className='img-fluid' alt="product image" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, nam.
          </h5>
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quibusdam expedita aspernatur laboriosam iure libero molestias repellat odit sapiente maiores.
          </p>
          <p className="price">$100.00</p>
          <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor={'#ffd700'}
            />
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className='border-0 bg-transparent'>
                <img src="images/prodcompare.svg" alt="compare" />
              </button>
              <button className='border-0 bg-transparent'>
                <img src="images/view.svg" alt="view" />
              </button>
              <button className='border-0 bg-transparent'>
                <img src="images/add-cart.svg" alt="add cart" />
              </button>
            </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"} `}>
    <Link 
        to={`${
          location.pathname == '/' 
            ? "product/:id" 
            : location.pathname == "/product/:id"  
            ? "/product/:id" 
            : ":id"
          }`}  
          className="product-card position-relative"
      >
          <div className="wishlist-icon position-absolute">
            <button className='border-0 bg-transparent'>
              <img src="images/wish.svg" alt="wishlist" />
            </button>
          </div>
        <div className="product-image">
          <img src="images/watch.jpg" className='img-fluid' alt="product image" />
          <img src="images/headphone.jpg" className='img-fluid' alt="product image" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, nam.
          </h5>
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quibusdam expedita aspernatur laboriosam iure libero molestias repellat odit sapiente maiores.
          </p>
          <p className="price">$100.00</p>
          <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className='border-0 bg-transparent'>
                <img src="images/prodcompare.svg" alt="compare" />
              </button>
              <button className='border-0 bg-transparent'>
                <img src="images/view.svg" alt="view" />
              </button>
              <button className='border-0 bg-transparent'>
                <img src="images/add-cart.svg" alt="add cart" />
              </button>
            </div>
        </div>
      </Link>
    </div>
    </>
    
  )
}

export default ProductCard