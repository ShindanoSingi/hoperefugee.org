import React from 'react'
import { useParams } from 'react-router-dom'
import CardImageFull from '../components/CardImageFull';
import {list} from '../constants/List';


function Service() {
    const {id} = useParams();
    const item = list.find(item => item.id === parseInt(id));
  return (
    <div className='p-4 md:p-[10rem] lg:py-25 bg-gray lg:px-[25rem]'>
        <div class="top-0 absolute w-full h-full bg-center bg-cover">
                                    <span
                                          id="blackOverlay"
                                          class="w-full h-full opacity-75 bg-darkgrey"
                                    />
                              </div>
        <CardImageFull item={item} />
    </div>
  )
}

export default Service