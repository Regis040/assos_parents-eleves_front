import { Link, useNavigate } from "react-router-dom";
import "./HeaderAdmin.scss";

const HeaderAdmin = () => {
  
    const navigate = useNavigate();
  
    const handleLogout = () => {
      // Je dégage le token du local storage
      localStorage.removeItem("jwt");  
      // je redirige l'utilisateur vers la page de login
      navigate("/login");
    };

  return (
    <>
      <div class="headeradmin">
        <nav id="navheaderadmin">
            <div id="logoheader">
              <img id="logo" src="../../assets/imgs/logo.png" alt="le logo" />
            </div>
            <ul id="navheaderadminposition">
                <li>
                  <Link to="/admin/">Accueil admin</Link>
                </li>
                <li>|</li>
                <li>
                  <Link to="/admin/articles">Gérer les sujets</Link>
                </li>       
                <li>|</li> 
                <li>
                  <Link to="/admin/users">Gérer les adhérents</Link>
                </li>
                <li>|</li>
                <li>
                  <Link to="/">Retour accueil</Link>
                </li>
                <li>|</li>
                <li>
                  <button onClick={handleLogout}>Se déconnecter</button>
                </li>
              </ul>        
        </nav>
      </div>
      <div id="titleAdmin">
          <h2>Association de parents d'élèves</h2>
          <h1>AU  COEUR DE L'ENFANCE</h1>
      </div>
    </>
  );
};

export default HeaderAdmin;