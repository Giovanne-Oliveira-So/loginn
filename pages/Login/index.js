import React, { useState } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  function handleCadastrar() {
    history.push("cadastro");
  }

  return (
    <div className="login">
      <div className="login-logo">
        <img
          src="https://image.flaticon.com/icons/png/512/891/891401.png"
          alt="MdLockLogin App"
        />
      </div>

      <div className="login-right">
        <h1>Acessar</h1>

        <div className="login-loginInputEmail">
          <MdEmail />
          <input
            type="email"
            placeholder="Digite um email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login-loginInputPassword">
          <MdLock />
          <input
            placeholder="Digite sua senha"
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login-eye">
            {show ? (
              <HiEye size={20} onClick={handleClick} />
            ) : (
              <HiEyeOff size={20} onClick={handleClick} />
            )}
          </div>
        </div>

        <button type="button" onClick={() => ({})}>Entrar</button>

        <h4>Não tenho conta!</h4>

        <button type="button" onClick={handleCadastrar}>
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default Login;
