import React from 'react'
import { useLocation } from 'react-router-dom'


const Error = () => {
  const location = useLocation()
  return (
    <div>
      <h1>Opps! {location.pathname} only create Home.js not found</h1>
    </div>
  )
}

export default Error