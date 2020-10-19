import React, { useContext } from "react";
import { AuthContext } from "../data/AuthContext";
import Login from "./Login";

import ContactList from "../components/ContactList";

const Home = (props) => {
  const { isAuth } = useContext(AuthContext);

  return (
    <div>
      {isAuth ? (
        <ContactList />
      ) : (
        <div>
          'Please login' <a href="/login">Login</a>{" "}
        </div>
      )}
    </div>
  );
};

export default Home;
