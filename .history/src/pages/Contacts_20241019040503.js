import React from 'react'
import {contacts} from  '../constants/Constants'
import ContactCard from '../components/ContactCard'
import Loader from '../components/Loader'

export default function Contacts() {

    console.log('contacts', contacts)

  return (
    <div className='bg-blend-lighten grid-cols-1 w-full grid gap-4 md:grid-col-2 lg:grid-col-3 p-4 min-h-75'>
    {
        contacts.length > 0 ? contacts.map((contact, index) => (
          <ContactCard contact={contact} key={index}/>
        )) :
        <Loader />
    }
    </div>
  )
}
