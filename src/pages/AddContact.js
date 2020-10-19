import React, { useState } from "react";

const AddContact = (props) => {
  const [contact, setContact] = useState({
    email: "",
    phone: "",
    name: "",
    type: "personal",
  });

  const getToken = () => {
    const token = localStorage.getItem("x-auth-token");
    return token;
  };

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await getToken();

    const response = await fetch("http://localhost:5000/api/contacts", {
      method: "POST",
      headers: {
        "x-auth-token": token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(contact),
    });

    const data = await response.json();
    props.history.push("/");
  };

  return (
    <div
      className="w-full max-w-xs"
      style={{
        paddingTop: "100px",
        width: "800px",
        margin: "0 auto",
      }}
    >
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:{" "}
          </label>
          <input
            onChange={onChange}
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone:{" "}
          </label>
          <input
            onChange={onChange}
            type="tel"
            name="phone"
            className="form-control"
            placeholder="Enter phone"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name:{" "}
          </label>
          <input
            onChange={onChange}
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="type"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Type:{" "}
          </label>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            value={contact.type}
            onChange={onChange}
            name="type"
          >
            <option value="personal">Personal</option>
            <option value="professional">Professional</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 mt-2 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
