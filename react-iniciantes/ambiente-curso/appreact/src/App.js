import React from "react";

const titulo = <h1>Esse é um titulo</h1>;

const App = () => {
  const random = Math.random();
  const ativo = true;

  function mostrarNome(sobrenome) {
    return " Malcon" + " " + sobrenome;
  }

  const carro = {
    marca: "Ford",
    rodas: 4,
  };
  const estiloP = {
    color: "#cecece",
    fontSize: "25px",
  };

  return (
    <>
      {titulo}
      <p>
        {false ? "testando true" : "testando false"} - 10
        {mostrarNome("Augusto")}
      </p>
      <p style={estiloP}>{carro.marca}</p>
      <p>{carro.rodas}</p>
      <p style={estiloP}>{new Date().getFullYear()}</p>
      <p className={ativo ? "ativo" : "inativo"}>{random * 400}</p>
    </>
  );
};

export default App;
