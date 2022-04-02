import React from "react";
const Produtos = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];
  const nomes = produtos.map((nome) => nome?.nome);

  const propriedades = produtos.map(
    (propriedades) => propriedades?.propriedades
  );

  return (
    <table style={{ border: "1px solid black", width: "100%", padding: "5px" }}>
      <tbody>
        <tr>
          <td>
            <h4>{nomes[0]}</h4>
            <ul>
              <li>{propriedades[0][0]}</li>
              <li>{propriedades[0][1]}</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <h4>{nomes[1]}</h4>
            <ul>
              <li>{propriedades[1][0]}</li>
              <li>{propriedades[1][1]}</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Produtos;
