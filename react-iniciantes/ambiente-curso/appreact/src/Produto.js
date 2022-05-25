import React from "react";

const Produto = ({nome,preco}) => {
  
  return (
    <div>
      <h2>{nome}</h2>
      <p>{preco}</p>
    </div>
  );
};

export default Produto;
