import React from "react";
import { contacts, payment } from "../constants/Constants";
import TeamCard from "../components/TeamCard";
import Loader from "../components/Loader";
import Button from "../components/Button";

function Team() {
  return (
    <div className="bg-gray-600 grid place-content-center p-4 lg: min-h-screen overflow-scroll">
        <div className="grid grid-cols-1 gap-4 py-4 h-full md:grid-cols-2">
        {contacts.length > 0
              ? contacts.map((contact, index) =>
                      <TeamCard contact={contact} key={index} />
                )
              : <Loader />}
        </div>
        <div className="text-white py-4 flex justify-center"><Button
                                          type="primary"
                                          text="DONATE"
                                          border="white"
                                          hoverColor="primary"
                                          href={payment.link}
                                    /></div>

        </div>
  )
}

export default Team
