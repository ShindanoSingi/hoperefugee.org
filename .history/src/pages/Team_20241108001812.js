import React from "react";
import { contacts } from "../constants/Constants";
import TeamCard from "../components/TeamCard";
import Loader from "../components/Loader";

function Team() {
  return (
    <div className="bg-gray-600 grid place-content-center p-4 lg: min-h-dvh overflow-scroll">
        <div className="grid grid-cols-1 gap-4 py-4 h-full md:grid-cols-2 lg:grid-cols-2">
        {contacts.length > 0
              ? contacts.map((contact, index) =>
                      <TeamCard contact={contact} key={index} />
                )
              : <Loader />}
        </div>
        </div>
  )
}

export default Team
