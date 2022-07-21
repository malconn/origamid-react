import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {
  const global = React.useContext(GlobalContext);
  return (
    <div className='Produtos' style={{display:"flex",margin:"0 auto"}}>
      {
       global && global?.produto?.map((produto)=>{
          return (
          <div key={produto?.id} className='produto-card' style={{maxWidth:"259px",margin: "0 10px"}}>
            <p>Nome: {produto?.nome}</p>
            {produto && produto?.fotos?.map((img)=><img width={100} key={img?.title} src={img?.src}/>)}
            <p>{produto?.descricao}</p>
          </div>
          )
       })
      }
    </div>
  )
}

export default Produto