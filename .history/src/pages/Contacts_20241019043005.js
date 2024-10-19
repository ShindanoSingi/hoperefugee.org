import React from "react";
import { contacts } from "../constants/Constants";
import ContactCard from "../components/ContactCard";
import Loader from "../components/Loader";

export default function Contacts() {
      console.log("contacts", contacts);

      return (
        <div className="bg-gray-800 p-4 h-screen">
        <div className="grid grid-cols-1 gap-4 h-full md:grid-cols-2 lg:grid-cols-4">
        {contacts.length > 0
              ? contacts.map((contact, index) =>
                      <ContactCard contact={contact} key={index} />
                )
              : <Loader />}
        </div>
  </div>
      );
}