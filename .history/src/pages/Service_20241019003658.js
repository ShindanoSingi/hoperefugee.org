import React from 'react'
import { useParams } from 'react-router-dom'
import CardImageFull from '../components/CardImageFull';
import {list} from '../constants/List';


function Service() {
    const {id} = useParams();
    const item = list.find(item => item.id === parseInt(id));
  return (
    <div className='p-4 md:p-[10rem] lg:px-[25rem]'>
        <CardImageFull item={item} />
    </div>
  )
}

export default Service