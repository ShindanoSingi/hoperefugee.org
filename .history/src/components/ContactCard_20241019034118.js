import React from 'react'

function ContactCard({contact}) {
  return (
    <div>
        <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img class="object-center object-cover rounded-full h-36 w-36" src="/images/test.jpg" alt="Contact profile"/>
                </div>
                <div class="text-center">
                    <p class="text-xl text-white font-bold mb-2">{contact.content}</p>
                    <p class="text-base text-gray-400 font-normal">{contact.role}</p>
                </div>
            </div>
    </div>
  )
}

export default ContactCard