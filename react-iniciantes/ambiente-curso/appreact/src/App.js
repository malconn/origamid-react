import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home/Home";
import Produtos from "./components/Pages/Produtos/Produtos";

const App = () => {
  const pathname = window.location.pathname;
  let Component;
  if (pathname === "/produtos") {
    Component = Produtos;
  } else {
    Component = Home;
  }
  return (
    <section>
      <Header />
      <Component />
    </section>
  );
};

export default App;
