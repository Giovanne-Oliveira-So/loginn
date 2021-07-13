import React from "react";
import "./cadastro.css";

function Cadastro() {
  return (
    <div>
      <div>
        <h1 id="titulo">Cadastro de Usuarios</h1>
        <p id="subtitulo">Complete suas informações</p>
        <br />
      </div>
      <form>
        <fieldset className="grupo">
          <div className="campo">
            <label htmlFor="nome">
              <strong>Nome</strong>
            </label>
            <input type="text" name="nome" id="nome" required />
          </div>
          <div className="campo">
            <label htmlFor="sobrenome">
              <strong>Sobrenome</strong>
            </label>
            <input type="text" name="sobrenome" id="sobrenome" required />
          </div>
          <div className="campo">
            <label htmlFor="Nome da empresa">
              <strong>Nome da empresa</strong>
            </label>
            <input
              type="text"
              name="Nome da empresa"
              id="Nome da empresa"
              required
            />
          </div>
        </fieldset>
        <div className="campo">
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="campo">
          <label>
            <strong>Ramo da empresa?</strong>
          </label>
          <label>
            <input
              type="radio"
              name="devweb"
              defaultValue="Automóveis e Veículos"
              defaultChecked
            />
            Automóveis e Veículos
          </label>
          <label>
            <input type="radio" name="devweb" defaultValue="industrial" />
            industrial
          </label>
          <label>
            <input type="radio" name="devweb" defaultValue="tecnologia" />
            tecnologica
          </label>
          <label>
            <input type="radio" name="devweb" defaultValue="escolar" />
            escolar
          </label>
          <label>
            <input
              type="radio"
              name="devweb"
              defaultValue="Alimentos e Bebidas"
            />
            Alimentos e Bebidas
          </label>
          <label>
            <input
              type="radio"
              name="devweb"
              defaultValue="Artigos Religiosos"
            />
            Artigos Religiosos
          </label>
          <label>
            <input type="radio" name="devweb" defaultValue="Outros" />
            outros
          </label>
        </div>
        <div className="campo">
          <label htmlFor="serviços">
            <strong>serviços</strong>
          </label>
          <select id="serviços" required>
            <option selected disabled value>
              Selecione
            </option>
            <option>estoque online para empresas</option>
            <option>recrutamento </option>
            <option>outros</option>
          </select>
        </div>
        <button className="botao" type="submit" onsubmit>
          Concluído
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
