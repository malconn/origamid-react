import React from 'react'
const App = () => {
  const [contar,setContar] = React.useState(0)

  const handleClick = React.useCallback(()=>{
    setContar((contar)=> contar + 1);
  },[])


  return (
    <button onClick={handleClick}>{contar}</button>
  )
}

export default App