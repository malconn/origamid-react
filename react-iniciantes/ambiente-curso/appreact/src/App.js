// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
import React, { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [info,setInfo] = useState(null);
  function handleClick(event) {
    handleApi(event.target.innerText);
  }
  function handleApi(dados) {
    setLoading(true);
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${dados}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setInfo(data);
      });
  }
  return (
    <div>
      <button onClick={handleClick}>tablet</button>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      {loading && <p>Carregando...</p>}
      {
        <ul>
          <li key={info?.id}>{info?.id}</li>
        </ul>
      }
    </div>
  );
};

export default App;
