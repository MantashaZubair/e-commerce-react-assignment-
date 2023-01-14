import React from 'react'
import OfferSection from './OfferSection'
import img1 from "../../../Images/offer/img1.jpg"
import img2 from "../../../Images/offer/img3.jpg"
import img3 from "../../../Images/offer/img5.jpg"
 const Images=[
    {
        id:1,
        imgsrc:img1   
    },
    {
        id:2,      
        imgsrc:img2  
    },
     {
        id:3,
        imgsrc:img3, 
    }
]
const SliderOffer = () => {
  return (
    <>
    {/* offer section */}
   <div className="offers">
     <div className="conatiner">
       <div className="row mx-auto d-flex justify-content-center">
         {/* <!--offer box one--> */}
        {Images.map((item)=>{
         return <OfferSection
           img={item.imgsrc}
           key={item.id}
         />
        })}
       </div>
     </div>
   </div>
 </>
)
}

export default SliderOffer