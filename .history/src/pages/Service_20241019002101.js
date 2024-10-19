import React from 'react'
import { useLocation } from 'react-router-dom'


function Service() {
    const location = useLocation();
    const item = location.state;
  return (
    <div>Service</div>
  )
}

export default Service