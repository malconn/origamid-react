// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

import React from "react";
import Produto from "./Produto";

const App = () => {
  const [dado,setDado] = React.useState('');
  const [showDado,setShowDado] = React.useState('');

  function handleClick(event){
    event.preventDefault()
    const dadoToAPI = event.target.innerText;
    setDado(dadoToAPI)
  }

  React.useEffect(()=>{
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${dado}`)
    .then((result)=> result.json())
    .then((result)=> setShowDado(result))
  },[dado])

  return (
    <div>
      <h1>Preferência: {showDado?.nome}</h1>
      <button style={{marginRight:'2rem',}} onClick={handleClick}>
        smartphone
      </button>
      <button onClick={handleClick}>
        notebook
      </button>
      <Produto nome={showDado?.nome} preco={showDado?.preco}/>
    </div>
  );
};

export default App;
