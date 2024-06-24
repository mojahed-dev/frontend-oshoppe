import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />

      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="co-12">
              <div className="auth-card">
                <h3 className='text-center mb-3'>Create an Account</h3>
                <form action="" className='d-flex flex-column gap-15'>
                  <div>
                    <input
                      type="text"
                      name='name'
                      className="form-control"
                      placeholder='Name'
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name='mobile'
                      className="form-control"
                      placeholder='Mobile Number'
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name='email'
                      className="form-control"
                      placeholder='email'
                    />
                  </div>
                  <div className='mt-1'>
                    <input
                      type="password"
                      name='password'
                      className="form-control"
                      placeholder='password'
                    />
                  </div>
                  <div>
                    <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                      <button className='button border-0' type='submit'>Signup</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup