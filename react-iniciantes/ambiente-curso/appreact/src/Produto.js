import React from 'react'

const Produto = ({nome,descricao,preco,fotos,vendido,usuario_id}) => {
  return (
    <div>
      {vendido == 'true' && <span style={{color:'#fff',background:'red'}}>Este produto já foi vendido</span>}
      <h1>{nome}</h1>
      {fotos && fotos.map((foto)=>{
        return <img key={foto?.titulo} src={foto?.src} width={300} height={300} alt={foto?.titulo}/>
      })}
      <h3>{preco && Number(preco).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</h3>
      <h4>{usuario_id}</h4>
      <p>{descricao}</p>
    </div>
  )
}

export default Produto