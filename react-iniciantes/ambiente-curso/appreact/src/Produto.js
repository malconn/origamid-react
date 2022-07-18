import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {
  const global = React.useContext(GlobalContext);
  return (
    <div>
      Produto: {global.count}
      <button onClick={()=> global.adcionarUm()}>Clicar</button>
    </div>
  )
}

export default Produto