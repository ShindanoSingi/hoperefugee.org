import React from 'react'
import { useLocation } from 'react-router-dom'
import CardImage from '../components/CardImage';


function Service() {
    const location = useLocation();
    const {item} = location.state;
    console.log(item);
  return (
    <div>
        <CardImage item={item} />
    </div>
  )
}

export default Service