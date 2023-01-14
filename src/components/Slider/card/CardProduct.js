import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Rating from './Rating';

const CardProduct = (props) => {
  return (
    <>
              <div className="col-sm-6 col-md-4 col-lg-3 mt-4 ">
              
                <div className="product-list text-center mb-4 cards">
               
                  <div className="product-image">
                    <img
                      src={props.imgsrc}
                      alt="product-img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="product-name pt-2">
                    <h5 className="text-captalized">
                      {props.name}   
                    </h5>
                    <p className="mb-0 amount">{props.price}</p>
                    <div className="py-1">
                      <Rating  rating={props.rating} numreview={props.numreview}/>
                    </div>
                    <button type="button" className="add_to_cart pb-1">
                      <span ><FontAwesomeIcon icon={ faCartShopping }/></span>Add To Cart
                    </button>
                  </div>
                </div>
              </div>    
    </>
  )
}

export default CardProduct