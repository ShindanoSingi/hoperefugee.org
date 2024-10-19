import React from 'react'
import {contacts} from  '../constants/Constants'
import ContactCard from '../components/ContactCard'
import Loader from '../components/Loader'

export default function Contacts() {
  return (
    <div>
    {
        contacts.length > 0 ? contacts.map((contact, index) => (
          <ContactCard contact={contact} key={index}/>
        )) : <Loader />

    }
    </div>
  )
}
