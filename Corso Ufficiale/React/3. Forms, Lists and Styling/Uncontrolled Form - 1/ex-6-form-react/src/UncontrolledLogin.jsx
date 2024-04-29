export function UncontrolledLogin() {
  function handleLongin(event) {
    event.preventDefault();

    const username = event.target.elements.namedItem("username").value;
    const password = event.target.elements.namedItem("password").value;
    const remember = event.target.elements.namedItem("remember").checked;

    const data = {
      username,
      password,
      remember,
    };

    if (data.username === "" && data.password === "") {
      alert("Completa i campi richiesti!");
    } else {
      console.log(data);
    }
  }

  return (
    <>
      {/* Form on login account */}
      <form onSubmit={handleLongin} className="card">
        {/* Title typology form */}
        <h1>Uncontrolled Form</h1>
        <label htmlFor="username">
          <p>Username</p>
          <input type="text" name="username" />
        </label>

        <label htmlFor="password">
          <p>Password</p>
          <input type="password" name="password" />
        </label>

        <label htmlFor="remember">
          <span>Mantieni l'accesso</span>
          <input type="checkbox" name="remember" />
        </label>

        <button type="submit">Accedi</button>
      </form>
    </>
  );
}
