import React, { useState } from "react";

const Register = (props) => {
  const [user, setUser] = useState({ email: "", password: "", name: "" });
  const [error, setError] = useState(null);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("x-auth-token", data.token);
      props.history.push("/login");
    } else {
      setError("Plese enter a valid email/password");
    }
  };

  return (
    <div
      className="w-full max-w-xs"
      style={{
        paddingTop: "150px",
        width: "800px",
        margin: "0 auto",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:{" "}
          </label>
          <input
            type="email"
            name="email"
            onChange={onChange}
            className="form-control"
            placeholder="Enter email"
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
            type="text"
            name="name"
            onChange={onChange}
            className="form-control"
            placeholder="Enter name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password:{" "}
          </label>
          <input
            type="password"
            name="password"
            onChange={onChange}
            className="form-control"
            placeholder="Enter password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/login"
          >
            Login
          </a>
        </div>
      </form>
      {error !== null ? error : <></>}
    </div>
  );
};

export default Register;
