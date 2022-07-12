import React from "react";

const App = () => {
 const [carrinho,setCarrinho] = React.useState(0);
 const [notificacao,setNotificacao] = React.useState(null);
 const timeoutRef = React.useRef();
 function handleClick(){
  setCarrinho(carrinho + 1);
  setNotificacao('Item Adiconado ao carrinho');
  clearTimeout(timeoutRef.current);
  timeoutRef.current = setTimeout(()=>{
    setNotificacao(null);
  },2000);
 }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  );
};

export default App;
