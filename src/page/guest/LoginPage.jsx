import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../component/guest/Header";
import Footer from "../../component/guest/Footer";
import './LoginPage.scss';
import './Form.scss';

const LoginPage = () => {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Vérification si les champs sont vides
    if (!username || !password) {
      setMessage("Veuillez remplir tous les champs.");
      return;
    }

    const loginData = {
      username,
      password,
    };

    const loginDataJson = JSON.stringify(loginData);

    try {
      const loginResponse = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: loginDataJson,
      });

      const loginResponseData = await loginResponse.json();

      if (loginResponse.ok) {
        const token = loginResponseData.data;
        localStorage.setItem("jwt", token);
        setMessage("Vous êtes bien connecté");
        navigate("/");
      } else {
        setMessage("Erreur lors de la connexion : " + loginResponseData.message);
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      setMessage("Une erreur s'est produite lors de la connexion.");
    }
  };

  return (
    <>
      <Header />
      <section>
        <div className="soustitre">
          <h2>Formulaire de connexion à votre compte d'utilisateur</h2>
        </div>
        {message && <p>{message}</p>}
        <form onSubmit={handleLogin} className="formposition">
          <h3>Veuillez vous connecter</h3>
          <label htmlFor="username">
            <input placeholder="Votre nom d'utilisateur" type="text" name="username" id="username" required />
          </label>
          <label>
            <input placeholder="Votre mot de passe" type="password" name="password" id="password" required />
          </label>
          <input type="submit" value="login" />
        </form>
      </section>
      <Footer />
    </>
  );
};

export default LoginPage;
