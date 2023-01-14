import React from 'react'
import { NavLink } from 'react-router-dom'

const OfferSection = (props) => {
  return (
    <>
        <div className="col-sm-8 col-lg-3 col-md-4 mb-lg-0 mb-4">
              <NavLink href="#">
                <div className="offer-box text-center position-relative">
                  <div className="offer-inner">
                    <div className="offer-image position-relative overflow-hidden">
                      <img src={props.img} className="img-fluid" alt='image'/>
                    </div>
                    <div className="offer-info">
                      <div className="offer-info-inner">
                        <p className="heading-bigger text-captalize">Sale 30%</p>
                        <p
                          className="offer-title-1 text-captalize font-weight-bold"
                        >
                          Don't miss this chance
                        </p>
                        <button
                          type="button"
                          className="btn btn-outline-danger text-captalize mt-4"
                        >
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
    </>
  )
}

export default OfferSection