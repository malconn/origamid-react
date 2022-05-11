import React from "react";

const Produto = ({ info }) => {
  return (
    <div>
      {info?.vendido == "true" && (
        <span style={{ color: "#fff", background: "red" }}>
          Este produto já foi vendido
        </span>
      )}
      <h1>{info?.nome}</h1>
      <img
        key={info?.fotos[0]?.titulo}
        src={info?.fotos[0]?.src}
        alt={info?.fotos[0]?.titulo}
      />
      <h3>
        {info?.preco &&
          Number(info?.preco).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
      </h3>
      <h4>{info?.usuario_id}</h4>
      <p>{info?.descricao}</p>
    </div>
  );
};

export default Produto;
