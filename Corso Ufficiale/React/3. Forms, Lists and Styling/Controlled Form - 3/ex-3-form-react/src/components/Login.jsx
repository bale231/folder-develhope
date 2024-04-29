import { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function setUser(event) {
    const { type, value, name, checked } = event.target;
    const valueInput = type == "checkbox" ? checked : value;
    setData({
      ...data,
      [name]: valueInput,
    });
  }

  function user() {
    const username = data.username;
    const password = data.password;
    const remember = data.remember;
    return username, password, remember;
  }

  return (
    <>
      <form className="card">
        <h2>Accedi</h2>
        <label htmlFor="username">
          <p>Username</p>
          <input
            onChange={setUser}
            type="text"
            name="username"
            value={data.username}
          />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input
            onChange={setUser}
            type="password"
            name="password"
            id="password"
            value={data.password}
          />
        </label>
        <label htmlFor="checkbox">
          <p></p>
          <input
            onChange={setUser}
            type="checkbox"
            name="remember"
            id="checkbox"
            value={data.remember}
          />
          <span>Ricordami</span>
        </label>
        <div>
          {/* Metodo Normale */}
          {/* {data.password === "" || data.username === "" ? (
            <button id="submit" type="submit" disabled>
              Login
            </button>
          ) : (
            <button id="submit" type="submit">
              Login
            </button>
          )} */}
          
          {/* Metodo semplificato */}
          <button
            id="submit"
            type="submit"
            disabled={data.password === "" || data.username === ""}
          >
            {" "}
            Login{" "}
          </button>
        </div>
        {/* Verifico il funzionamento */}
        <p>Username: {data.username}</p>
        <p>Password: {data.password}</p>
        <p>
          Ricordami:{" "}
          {data.remember == false
            ? "Salva le tue credenziali!"
            : "Credenziali memorizzate"}
        </p>
      </form>
    </>
  );
}
