import React from 'react'

function TeamCard({contact, index}) {
  return (
    <div key={index}>
        <div class=" bg-gray-900 w-[20rem] rounded-lg shadow-lg p-12 flex flex-col justify-center items-center">
                <div class="mb-8">
                    <img class="object-center object-cover rounded-full h-[20rem] w-[20rem]" src={`/images/${contact.image}`} alt="Contact profile"/>
                </div>
                <div class="text-center">
                    <p class="text-xl text-white font-bold mb-2">{contact.content}</p>
                    <p class="text-base text-gray-400 font-normal">{contact.role}</p>
                </div>
            </div>
    </div>
  )
}

export default TeamCard