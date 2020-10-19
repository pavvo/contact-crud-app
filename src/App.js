import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddContact from "./pages/AddContact";

import AuthContextProvider from "./data/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/contact/add" component={AddContact} />
      </Router>
    </AuthContextProvider>
  );
};

export default App;
