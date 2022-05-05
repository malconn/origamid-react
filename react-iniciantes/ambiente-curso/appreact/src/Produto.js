import React from 'react'

const Produto = ({nome,descricao,preco}) => {
  return (
    <div>
      <h1>Produto: <span>{nome}</span></h1>
      <p>Descrição: <span>{descricao}</span></p>
      <p>Preço: <span>{preco}</span></p>
    </div>
  )
}

export default Produto