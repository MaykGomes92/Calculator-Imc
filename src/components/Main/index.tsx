import React from "react";
import "./style.scss";
import calculadora from "../../assets/calculator-imc.png";
import human from "../../assets/human-imc.webp";
import arrow from "../../assets/leftarrow.png";

import { TabelaImc } from "./TabelaImc";
const index = () => {
  const [peso, setPeso] = React.useState(0);
  const [altura, setAltura] = React.useState(0);
  const [modal, setModal] = React.useState(false);
  const [imc, setImc] = React.useState(0);

  function pesoInput(e: React.ChangeEvent<HTMLInputElement>) {
    setPeso(Number(e.target.value));
  }
  function alturaInput(e: React.ChangeEvent<HTMLInputElement>) {
    setAltura(Number(e.target.value));
  }

  function abrirModal() {
    setModal(!modal);
  }

  function calcularImc() {
    setImc(peso / (altura * altura));
  }

  return (
    <>
      <h1 onClick={abrirModal} className="titleTabela">
        Ver tabela IMC
      </h1>
      {modal && (
        <div className="tabelaImc">
          {TabelaImc.map((item, index) => (
            <div className="containerTabela">
              <div
                style={{ backgroundColor: item.backgroundColor }}
                className="itensImc"
                key={index}
              >
                <h1 style={{ color: item.color }}>
                  {item.title} {item.subtitle}
                </h1>
              </div>
            </div>
          ))}
          <button className="btnClose" onClick={abrirModal}>
            <img src={arrow} alt="" />
          </button>
        </div>
      )}
      <main className="container">
        <div className="leftSide">
          <h1>IMC Calculator</h1>
          <input
            type="number"
            placeholder="Digite sua altura. Ex: 1.86"
            value={altura > 0 ? altura : ""}
            onChange={alturaInput}
          />
          <input
            type="number"
            placeholder="Digite seu peso. Ex: 75.2"
            value={peso > 0 ? peso : ""}
            onChange={pesoInput}
          />
          <button onClick={calcularImc}>Calcular</button>
          {imc > 0 && (
            <>
              <h1 className="resImc">Seu imc é de: {imc.toFixed(2)}</h1>
              <p>Consulte a tabela.</p>
            </>
          )}
        </div>

        <div className="rightSide">
          <img className="human" src={human} alt="" />
          <img className="calc" src={calculadora} alt="" />
          <div className="vetor"></div>
        </div>
      </main>
    </>
  );
};

export default index;
