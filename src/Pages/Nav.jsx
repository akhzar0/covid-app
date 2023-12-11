import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
const Nav = () => {
  return (
    <>
      <div style={{backgroundColor:"#fff"}} className='d-flex align-items-center justify-content-around shadow-sm w-100'>
         <div className="d-flex align-items-center p-3">

            <img style={{width:"11%",height:"11%"}} 
            src="https://img.freepik.com/premium-photo/coronavirus-model-isolated-white-background-micro-virus-
            photo_548821-2297.jpg?size=626&ext=jpg&ga=GA1.1.1382390476.1666697866&semt=ais" alt="" />

              <Link to='/' className='fs-4 text-decoration-none text-dark'>Covid 19 Updates</Link>
              </div>
              <div className=''>
              <Link to='/home' className='mx-3 text-primary text-decoration-none fs-5'>Home</Link>
              <Link to='/state' className='mx-3 text-primary text-decoration-none fs-5'>State</Link>
              <Link to="/country" className='mx-3 text-primary text-decoration-none fs-5'>Country</Link>
              <Link to='/flag' className='mx-3 text-primary text-decoration-none fs-5'>Flag</Link>  
              </div>
      </div> 
    </>
  )
}

export default Nav;