import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../component/guest/Header";
import Footer from "../../component/guest/Footer";
// import './RegisterPage.scss'

const RegisterPage = () => {


  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  
  const handleRegistration = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
   
    const registerData = {
      username: username,
      email: email,
      password: password,
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
            <h2>Bienvenue</h2>
          {message && <p>{message}</p>}
          <form onSubmit={handleRegistration}>
                <label>
                    <input placeholder="Votre nom d'utilisateur" type="text" name="username" />
                </label>
                <label>              
                    <input  placeholder="Mot de passe" type="password" name="password" />
                </label>
                <label>              
                    <input  placeholder="Votre Email" type="email" name="email" />
                </label>
                <input  type="submit" />
          </form>
        </section>
        <Footer/>
      </>
  );
};

export default RegisterPage;