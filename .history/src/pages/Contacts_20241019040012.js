import React from 'react'
import {contacts} from  '../constants/Constants'
import ContactCard from '../components/ContactCard'
import Loader from '../components/Loader'

export default function Contacts() {

    console.log('contacts', contacts)

  return (
    <div className='bg-gray grid grid-1 gap-2 min-h-75'>
    {
        contacts.length > 0 ? contacts.map((contact, index) => (
          <ContactCard contact={contact} key={index}/>
        )) :
        <Loader />
    }
    </div>
  )
}
