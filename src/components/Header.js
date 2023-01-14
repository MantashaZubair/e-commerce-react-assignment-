import React from 'react'
import { NavLink } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping ,faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../Images/logo.png';
import "./Header.css"

const Header = () => {
  const [istoggleitem, settoggleItem]= React.useState(false);
  
    
  const handleitem =()=>{
    settoggleItem(true);
   
    return
  }
  return (
    <>
   
     <div className="container-fluid header">
    <div className="row">
      <div className="col-md-12 col-12 mx-auto ">
                 
                  <div className="row">
                      <div className="col-12 d-flex justify-content-between align-item-center first_header ">
                          <div className="container">
                           <div className="row my-3 ">
                              <div className="col-12 col-md-4 col-lg-4 header_logo">
                                  <NavLink to="/"><img src={logo}  min-width="100%" height="50px" alt='image'/></NavLink>  
                              </div>
                              <div className="col-12 col-md-5 col-lg-4 mt-2">
                                  <div className="input-group" >
                                      <input type="text" className="form-control " id="nav1_center_search_box" placeholder="Product-List , Category , etc "  />
                                      <button type="search" className="nav1_center_search_btn">Search</button>
                                    </div> 
                              </div>
                              
                            <div className="col-12 col-md-3 col-lg-4 d-lg-flex d-md-flex justify-content-end mt-2 mt-md-0">
                                  <NavLink className="login_cart m-1 px-2" to="login.js">Login</NavLink>
                                  <NavLink className="login_cart m-1 px-2" to="cart.js">
                                  <FontAwesomeIcon icon={ faCartShopping }/></NavLink>  
                            </div> 
                           </div>
                          </div>
                      </div>
                      </div>
                    </div>
                   
                    <nav className="navbar navbar-expand-sm bg-light py-1 fs-6 ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon" onClick={handleitem}>
                        <FontAwesomeIcon icon={istoggleitem ? faXmark :  faBars } />
                     </span>
    </button>
                   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav m-auto  text-center text-secondary">
                      <li className="nav-item px-2">
                        <NavLink to="/" className="nav-link ">Home</NavLink>
                      </li>
                      <li className="nav-item px-2">
                        <NavLink to="/allproduct.js" className="nav-link">All Product</NavLink>
                      </li>
                      <li className="nav-item px-2 dropdown  m-auto ">
                        <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                         to="/women.js" role="button" aria-expanded="false">Women</NavLink>
                        <ul className="dropdown-menu ">
                          <li><NavLink className="dropdown-item" to="/women/allproduct.js">All</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/women/dress.js">Dress</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/women/paint.js">Paints</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/women/skrits.js">Skrits</NavLink></li>
                        </ul>
                      </li>
                      <li className="nav-item px-2 dropdown  m-auto ">
                        <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                         to="#" role="button" aria-expanded="false">Men</NavLink>
                        <ul className="dropdown-menu ">
                          <li><NavLink className="dropdown-item" to="/men/shirts.js">Shirts</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/men/hoddies.js">Hoddies</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/men/paints.js">Paints</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/men/jeans.js">Jeans</NavLink></li>
                        </ul>
                      </li>
                      <li className="nav-item px-2">
                        <NavLink to="kids.js" className="nav-link">Kids</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="contact.js" className="nav-link">Contact</NavLink>
                      </li>
                    </ul>
                    </div>
                    </nav>
                    </div>
                    </div>
             </>
  );
};

export default Header;