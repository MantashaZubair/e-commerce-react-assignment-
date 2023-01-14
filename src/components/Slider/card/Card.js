import React from 'react'
import { CardData } from './CardData'
import CardProduct from './CardProduct'


const Card = () => {
  return (
    <>
    <div className="product">
    <div className="container">
      <div className="row">
        <div
          className="col-sm-12 d-flex align-item-center justify-content-center"
        >
          <div className="product-heading mb-5">
            <h1 className="pb-2 ">FEATURED <span>PRODUCT</span></h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!--product list --> */}
  <div className="container">
    <div className="row">
      <div className="col-9 col-sm-11 col-md-11 col-lg-11 mx-auto">
        <div className="row" >
      {CardData.map((card)=>{
        return<CardProduct
            key={card.id}
            imgsrc ={card.imgsrc}
            name={card.name}
            price={card.price}
            rating={card.rating}
            numreview={card.numreview}
        />
      })}

          
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default Card