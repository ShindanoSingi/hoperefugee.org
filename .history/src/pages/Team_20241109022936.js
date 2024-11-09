import React from "react";
import { contacts, payment } from "../constants/Constants";
import TeamCard from "../components/TeamCard";
import Loader from "../components/Loader";
import Button from "../components/Button";

function Team() {
  return (
    <div className="bg-gray-600 grid place-content-center min-h-screen ">
        <div className="grid grid-cols-1 gap-4 py-12 h-full md:grid-cols-2">
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
