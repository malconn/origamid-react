import React from 'react'

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) =>{
  const [count,setCount] = React.useState(0);

  function adcionarUm(){
    setCount((count)=> count + 1);
  }
  function adcionarDois(){
    setCount((count)=> count + 2);
  }

  return (
    <GlobalContext.Provider value={{nome:'Malcon',count,adcionarUm}}>
      {children}
    </GlobalContext.Provider>
  )
}
