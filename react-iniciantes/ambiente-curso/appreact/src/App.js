// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
import React, { useState } from 'react'

const App = () => {
  const [dados,setDados]= useState(null);
  const [baseUrl,setBaseUrl] = useState('https://ranekapi.origamid.dev/json/api/produto/');
  function handleClick(event){
    setDados(event.target.innerText);
  }
  function handleApi(baseUrl){
    console.log(baseUrl)
    fetch(baseUrl,{
      method:'GET',
    })
    // .then(resp=> JSON.stringify(resp))
    .then(resp =>console.log(resp))
    // return resp.json();
  }
  return (
    <div>
      {dados!==null ? handleApi(baseUrl+dados): ''}
      <button onClick={handleClick}>tablet</button>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  )
}

export default App