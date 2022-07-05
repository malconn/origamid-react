// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

import React from "react";
import Produto from "./Produto";

const App = () => {
  const [dado,setDado] = React.useState(null);

  function handleClick(event){
    event.preventDefault()
    const dadoToAPI = event.target.innerText;
    setDado(dadoToAPI)
  }
  React.useEffect(()=>{
    const dadoToFecth = window.localStorage.getItem('preferencia')
    dadoToFecth !== null && setDado(dadoToFecth)
  },[])
  React.useEffect(()=>{
    dado !== null && window.localStorage.setItem('preferencia',dado)
  },[dado])

  return (
    <div>
      <h1>Preferência: {dado}</h1>
      <button style={{marginRight:'2rem',}} onClick={handleClick}>
        smartphone
      </button>
      <button onClick={handleClick}>
        notebook
      </button>
      <Produto dado={dado}/>
    </div>
  );
};

export default App;
