import React from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { FaArrowLeftLong } from "react-icons/fa6";
import blogImage from '../images/blog-1.jpg';
import Container from '../components/Container';

function SingleBlog() {
  return (
    <>
          <Meta title={"Dynamic Blog Name"} />
          <BreadCrumb title="Dynamic Blog Name" />

          <Container class1="blog-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to="/blog" className='d-flex align-items-center gap-10'><FaArrowLeftLong className='fs-4' /> Go back to Blogs</Link>
                                <h3 className="title">Lorem ipsum dolor sit amet.</h3>
                                <img src={blogImage} alt="blog image" className='img-fluid w-100 my-4' />
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit voluptatibus neque aliquid, quam repellendus voluptate nihil deleniti repellat sunt explicabo, aut ipsam adipisci similique molestiae obcaecati ipsa ea atque mollitia non. Incidunt sit ex repellat.</p>
                            </div>
                        </div>
                    </div>
            </Container>
    </>
  )
}

export default SingleBlog