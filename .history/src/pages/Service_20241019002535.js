import React from 'react'
import { useParams } from 'react-router-dom'
import CardImage from '../components/CardImage';


function Service() {
    const {id} = useParams();
    console.log(item);
  return (
    <div>
        <CardImage item={item} />
    </div>
  )
}

export default Service