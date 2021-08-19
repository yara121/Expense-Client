import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import Navigation from "./components/NavBar";
import { Home, Login, Signup } from "./pages";
import { NavBar, ProtectedRoute } from "./components";

function App() {
  return (
    <div>
      <Container>
        <Navigation />
        <Switch>
          <ProtectedRoute path="/" component={Home} exact />
        </Switch>
        <Route path="/Login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
      </Container>
    </div>
  );
}

export default App;
