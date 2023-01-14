import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "./Footer.css"

const Footer = () => {
  return (
    <>
   <div className='footer'>
<div className="row mt-lg-3 mt-5 ">
  <div className="col-12 d-flex justify-content-around align-item-center  ">
    <div className="container mt-5">
          <div className="row">
      <div className="col-sm-12 col-12 col-md-12 col-lg-3 text-center ">
        <h3 className="pb-3">Women</h3>
        <p><NavLink to="#/Dresses">Dresses</NavLink></p> 
         <p><NavLink to="#/pants">Pants</NavLink></p>
         <p><NavLink to="#/shirts">Skirts</NavLink></p>
      </div>
      <div className="col-sm-12 col-12 col-md-12 col-lg-3 text-center">
        <h3 className="pb-3">Men</h3>
        <p><NavLink to="#/shirts">Shirts</NavLink></p>
        <p><NavLink to="#/pants">Pants</NavLink></p>
       <p> <NavLink to="#/hoddies">Hoddies</NavLink></p>
    </div>
      <div className="col-sm-12 col-12 col-md-12 col-lg-3 text-center">
        <h3 className="pb-3">Kids</h3>
    <p><NavLink to="#/home">Frock</NavLink></p>
    <p><NavLink to="#/contact">Party Top</NavLink></p>
    <p><NavLink to="#/login">Baba suit</NavLink></p>
      </div>
      <div className="col-sm-12 col-12 col-md-12 col-lg-3 text-center">
        <h3 className="pb-3">Links</h3>
        <p><NavLink to="#/home">Home</NavLink></p>
        <p><NavLink to="#/contact">Contact</NavLink></p>
        <p><NavLink to="#/login">Login</NavLink></p>
      </div>
    </div>
  
    <hr/>
    <div className="row">
      <div className="col-12 d-flex justify-content-center ">
       <p>Copyright Ecommerce 2022-2023</p> 
      </div>
    </div>
  
  </div>
  </div>
</div>
</div>
    </>
  )
}

export default Footer