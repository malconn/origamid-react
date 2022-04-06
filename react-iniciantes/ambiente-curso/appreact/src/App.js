import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home/Home";
import Produtos from "./components/Pages/Produtos/Produtos";

const App = () => {
  const { pathname } = window.location;
  let Component;
  const verificarPathName =
    pathname === "/produtos" ? (Component = Produtos) : (Component = Home);
  return (
    <section>
      <Header />
      <Component />
    </section>
  );
};

export default App;
