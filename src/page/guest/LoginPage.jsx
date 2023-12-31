import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginPage.scss';

const LoginPage = () => {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();


    const username = event.target.username.value;
    const password = event.target.password.value;

    const loginData = {
      username,
      password,
    };

    const loginDataJson = JSON.stringify(loginData);

    const loginResponse = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: loginDataJson,
    });

    const loginResponseData = await loginResponse.json();
    const token = loginResponseData.data;

    if (token) {
      localStorage.setItem("jwt", token);
      setMessage("Vous êtes bien connecté");
      navigate("/");
    } else {
      setMessage("Erreur lors de la connexion");
    }
  };

  return (
    <section>
      {message && <p>{message}</p>}
      <form onSubmit={handleLogin} className="formposition">
        <label for="username">
          Nom d'utilisateur :
          <input type="text" name="username" id="username" required/>
        </label>
        <label>
          Mot de passe:
          <input type="password" name="password" id="password" required />
        </label>
            <input type="submit" value="login"/>
      </form>
    </section>
  );
};

export default LoginPage;