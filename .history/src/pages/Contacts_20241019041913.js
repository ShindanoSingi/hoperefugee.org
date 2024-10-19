import React from "react";
import { contacts } from "../constants/Constants";
import ContactCard from "../components/ContactCard";
import Loader from "../components/Loader";

export default function Contacts() {
      console.log("contacts", contacts);

      return (
            <div className="bg-gray-800 p-4 min-h-100">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {contacts.length > 0
                        ? contacts.map((contact, index) =>
                                <ContactCard contact={contact} key={index} />
                          )
                        : <Loader />}
                  </div>
            </div>
      );
}
