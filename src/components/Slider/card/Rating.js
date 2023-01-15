import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
// import { faStar as lightStar} from '@fortawesome/free-regular-svg-icons';
import { faStar as lightStar} from '@fortawesome/fontawesome-free-regular';
export default function Rating(props) {
    const {rating, numreview}=props
    
  return (
    <>
    <div className="rating">
  
    <span>  <FontAwesomeIcon icon={ rating>=1 ?faStar : rating>=0.5?  faStarHalfStroke: lightStar}/></span>
    <span>  <FontAwesomeIcon icon={ rating>=2 ?faStar : rating>=1.5?  faStarHalfStroke: lightStar}/></span>
    <span>  <FontAwesomeIcon icon={ rating>=3 ?faStar : rating>=2.5?  faStarHalfStroke:lightStar}/></span>
    <span>  <FontAwesomeIcon icon={ rating>=4 ?faStar : rating>=3.5?  faStarHalfStroke: lightStar }/></span>
    <span>  <FontAwesomeIcon icon={ rating>=5 ?faStar : rating>=4.5?  faStarHalfStroke: lightStar}/></span>
    <span>{numreview +"review"} </span>

    
</div>
</>
  )
}