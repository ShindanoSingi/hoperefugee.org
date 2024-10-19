import React from 'react'
import { useParams } from 'react-router-dom'
import CardImage from '../components/CardImage';
import {list} from '../constants/List';


function Service() {
    const {id} = useParams();
    const item = list.find(item => item.id === parseInt(id));
  return (
    <div>
        <CardImage item={item} />
    </div>
  )
}

export default Service