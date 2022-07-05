import React from "react";

const Produto = ({dado}) => {
  const [dados,setDados] = React.useState(null);

  React.useEffect(()=>{
   dado !== null && 
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${dado}`)
    .then((response)=> response.json())
    .then((json)=> setDados(json))
  },[dado])

  if(dados === null){
    return null
  }
  return (
    <div>
      <h2>{dados.nome}</h2>
      <p>R$ {dados.preco}</p>
    </div>
  );
};

export default Produto;
