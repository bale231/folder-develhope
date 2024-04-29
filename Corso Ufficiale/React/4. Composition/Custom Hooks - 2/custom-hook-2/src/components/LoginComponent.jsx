import React, { useRef } from "react";
import { useLogin } from "./useLogin";

function LoginComponent() {
  const [username, password, handleUsername, handlePassword] = useLogin();
  const usernameReset = useRef(null);
  const passwordReset = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username, password);
  }

  function resetInput() {
    usernameReset.current.value = "";
    passwordReset.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        <span>Username</span>
        <input
          type="text"
          onChange={handleUsername}
          value={username}
          name="username"
          id="username"
          ref={usernameReset}
        />
      </label>
      <label htmlFor="password">
        <span>Password</span>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handlePassword}
          value={password}
          ref={passwordReset}
        />
      </label>
      <button type="submit" onClick={resetInput}>
        Accedi
      </button>
    </form>
  );
}

export default LoginComponent;
