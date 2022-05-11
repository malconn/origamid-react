// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
import React, { useState } from "react";
import Produto from "./Produto";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);
  function handleClick(event) {
    handleApi(event.target.innerText);
  }
  async function handleApi(dados) {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${dados}`,
      {
        method: "GET",
      }
    );
    const json = await response.json();
    setLoading(false);
    setInfo(json);
  }
  return (
    <div>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        tablet
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        smartphone
      </button>
      {loading ? <p>Carregando...</p> : <Produto info={info} />}
    </div>
  );
};

export default App;
