import React from "react";
const App = () => {
  let ativo = true;

  function handleClick(){
    ativo = !ativo;
    console.log(ativo)
  }

  return (
    <div>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </div>
  );
};

export default App;
