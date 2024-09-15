import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../component/guest/Header";
import Footer from "../../component/guest/Footer";
import './RegisterPage.scss';
import './Form.scss';

const RegisterPage = () => {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleRegistration = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const firstname = event.target.firstname.value;
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const gender_kid = event.target.gender_kid.value;
    const firstname_kid = event.target.firstname_kid.value;
    const etablishment = event.target.etablishment.value;
    const school_class = event.target.school_class.value;

    // Validation des champs obligatoires
    if (!name || !firstname || !username || !email || !password || !gender_kid || !firstname_kid || !etablishment || !school_class) {
      setMessage("Veuillez remplir tous les champs requis.");
      return;
    }

    const registerData = {
      name: name,
      firstname: firstname,
      username: username,
      email: email,
      password: password,
      gender_kid: gender_kid,
      firstname_kid: firstname_kid,
      etablishment: etablishment,
      school_class: school_class,
      RoleId: 3
    };

    const registerDataJson = JSON.stringify(registerData);
    console.log(registerDataJson);

    try {
      const registerResponse = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: registerDataJson,
      });

      // Gestion des erreurs si la réponse n'est pas 201
      if (!registerResponse.ok) {
        throw new Error(`Erreur: ${registerResponse.status}`);
      }

      // const responseData = await registerResponse.json();
      setMessage("Vous vous êtes bien enregistré");
      navigate("/login");
    } catch (error) {
      console.error("Erreur lors de l'enregistrement:", error);
      setMessage("Erreur lors de l'enregistrement : " + error.message);
    }
  };

  return (
    <>
      <Header />
      <section>
        <div className="soustitre">
          <h2>Notre projet vous intéresse : REJOIGNEZ-NOUS</h2>
        </div>
        {message && <p>{message}</p>}
        <form onSubmit={handleRegistration} className="formpositionregister">
          <h3>A propos de vous</h3>
          <label>
            <input placeholder="Votre nom" type="text" name="name" />
          </label>
          <label>
            <input placeholder="Votre prénom" type="text" name="firstname" />
          </label>
          <label>
            <input placeholder="Votre nom d'utilisateur" type="text" name="username" />
          </label>
          <label>
            <input placeholder="Votre Email" type="email" name="email" />
          </label>
          <label>
            <input placeholder="Mot de passe" type="password" name="password" />
          </label>
          <h3>A propos de votre enfant</h3>
          <select id="gender_kid" name="gender_kid" required>
            <option value="">Sélectionner le genre</option>
            <option value="fille">Une fille</option>
            <option value="garcon">Un garçon</option>
          </select>
          <label>
            <input placeholder="Son prénom" type="text" name="firstname_kid" />
          </label>
          <select id="etablishment" name="etablishment" required>
            <option value="">Sélectionner l'établissement scolaire</option>
            <option value="Ecole Meyrie">Ecole Meyrie</option>
            <option value="Ecole petit Prince">Ecole petit Prince</option>
            <option value="Collège Jean Mermoz">Collège Jean Mermoz</option>
            <option value="Lycée Gaspard proust">Lycée Gaspard proust</option>
          </select>
          <label>
            <input placeholder="Sa classe" type="text" name="school_class" />
          </label>
          <input type="submit" />
        </form>
      </section>
      <Footer />
    </>
  );
};

export default RegisterPage;
