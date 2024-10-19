import React from 'react'
import {contacts} from  '../constants/Constants'
import ContactCard from '../components/ContactCard'

export default function Contacts() {
  return (
    <div>
    {
        contacts.map((contact, index) => (
          <ContactCard contact={contact} key={index}/>
        ))

    }
    </div>
  )
}
