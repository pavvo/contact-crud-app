import React, { useEffect, useState } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    const token = localStorage.getItem("x-auth-token");

    const response = await fetch("http://localhost:5000/api/contacts", {
      method: "GET",
      headers: {
        "x-auth-token": token,
      },
    });

    const data = await response.json();

    setContacts(data);
  };

  const handleClick = () => {
    localStorage.removeItem("x-auth-token");
    window.location = "/";
  };
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone number</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <tr key={contact.id}>
                <td className="border px-4 py-2">{contact.name}</td>
                <td className="border px-4 py-2">{contact.type}</td>
                <td className="border px-4 py-2">{contact.email}</td>
                <td className="border px-4 py-2">+{contact.phone}</td>
              </tr>
            ))
          ) : (
            <span>No contacts</span>
          )}
        </tbody>
      </table>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        <a href="/contact/add">Add new contact</a>
      </button>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
};

export default ContactList;
