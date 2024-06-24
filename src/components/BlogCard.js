import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard() {
    return (
        <>
            
               <div className="blog-card">
                    <div className="card-image p-0">
                        <img src="images/blog-1.jpg" className='img-fluid w-100' alt="blog" />
                    </div>
                    <div className="blog-content">
                        <p className='date'>11 JUNE 2022</p>
                        <h5 className="title">Lorem ipsum dolor sit amet.</h5>
                        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem porro exercitationem maxime, saepe delectus eius molestias facilis quia! Dolorem.</p>
                        <Link to="/blog/:id" className="button">Read More</Link>
                    </div>
               </div>
        </>
    )
}

export default BlogCard