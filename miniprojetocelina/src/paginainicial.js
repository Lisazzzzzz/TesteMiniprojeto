import React from 'react';
import '../src/paginacss.css';
import myImage from './images/eu-1.jpg'

function PaginaInicial() {
  return (
    <div className="container">
      <h1 className="title"> Bem-vindo à Minha Página </h1>
      <div className="content">
        <img src={myImage} alt="Descrição da imagem" className="image" />
        <div className="info">
          <h2>Celina Cruz</h2>
          <p>Características:</p>
          <ul>
            <li> 107212 </li>
            <li> MiniProjeto CI/CD </li>
            <li> TDW </li>
          </ul>
          <p> Opa logo vejo </p>
        </div>
      </div>
    </div>
  );
}

export default PaginaInicial;