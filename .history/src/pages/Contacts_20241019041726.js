import React from "react";
import { contacts } from "../constants/Constants";
import ContactCard from "../components/ContactCard";
import Loader from "../components/Loader";

export default function Contacts() {
      console.log("contacts", contacts);

      return (
            <div className="bg-gray-800 min-h-75">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                  {contacts.length > 0
                        ? contacts.map((contact, index) =>
                                <ContactCard contact={contact} key={index} />
                          )
                        : <Loader />}
                  </div>
            </div>
      );
}