import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home/Home";
import Produtos from "./components/Pages/Produtos/Produtos";

const App = () => {
  const pathname = window.location.pathname;
  if (pathname === "/produtos") {
    return (
      <div>
        <Header />
        <Produtos />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
};

export default App;
