import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../component/guest/Header";
import Footer from "../../component/guest/Footer";
import './RegisterPage.scss'
import './Form.scss'

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
console.log(registerDataJson)
    const registerResponse = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: registerDataJson,
    });
 console.log(registerResponse)

    if (registerResponse.status === 201) {      
      setMessage("Vous vous êtes bien enregistré");
      navigate("/login");
    } else {    
      setMessage("Erreur lors de l'enregistrement");
    }
  };

  return (
      <>
        <Header/>
        <section>
          <div class="soustitre">
                <h2>Notre projet vous intéresse : REJOIGNEZ-NOUS</h2>
          </div>
          {message && <p>{message}</p>}
          <form onSubmit={handleRegistration} className="formpositionregister">
                <h3>A propos de vous</h3>
                <label>
                    <input placeholder="Votre nom " type="text" name="name" />
                </label>
                <label>
                    <input placeholder="Votre prénom" type="text" name="firstname" />
                </label>
                <label>
                    <input placeholder="Votre nom d'utilisateur" type="text" name="username" />
                </label>
                <label>              
                    <input  placeholder="Votre Email" type="email" name="email" />
                </label>
                <label>              
                    <input  placeholder="Mot de passe" type="password" name="password" />
                </label>
                <h3>A propos de votre enfant</h3>
                      <select id="gender_kid" name="gender_kid" required>
                      <option value="">Sélectionner le genre</option>
                      <option value="fille">Une fille</option>
                      <option value="garcon">un garçon</option>
                </select>
                <label>              
                    <input  placeholder="Son prénom" type="text" name="firstname_kid" />
                </label>               
                <select id="etablishment" name="etablishment" required>
                      <option value="">Sélectionner l'établissement scolaire</option>
                      <option value="Ecole Meyrie">Ecole Meyrie</option>
                      <option value="Ecole petit Prince">Ecole petit Prince</option>
                      <option value="Collège Jean Mermoz">Collège Jean Mermoz</option>
                      <option value="Lycée Gaspard proust">Lycée Gaspard proust</option>                      
                </select>
                <label>              
                    <input  placeholder="Sa classe" type="text" name="school_class" />
                </label>        
                <input  type="submit" />
          </form>
        </section>
        <Footer/>
      </>
  );
};

export default RegisterPage;