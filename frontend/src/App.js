import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
    <NavBar />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default App;
