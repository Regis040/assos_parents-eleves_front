import { Link, useNavigate} from "react-router-dom";
import "./Header.scss";


const Header = () => {

  const token = localStorage.getItem("jwt");
  const navigate = useNavigate();

  const handleLogout = () => {
    // Je dégage le token du local storage
    localStorage.removeItem("jwt");

    // je redirige l'utilisateur vers la page de login
    navigate("/login");
  };

  return (
    <>      
        <div id="headerstyle">
          <div id="logoheader">
            <img id="logo" src="../../assets/imgs/logo.png" alt="le logo" />
          </div>
          <ul id="navheader">                       
          <li><Link to="/">Accueil</Link></li>
            <li>|</li>
            <li><Link to="/">Actualités</Link></li>
            <li>|</li>
            <li><Link to="/">Les établissements</Link></li>
            <li>|</li>
            <li><Link to="/aboutus">A propos de nous</Link></li>
            <li>|</li>
            <li><Link to="/register">S'inscrire</Link></li>
            <li>|</li>
            {token ? (
            <li>
              <button onClick={handleLogout}>Se déconnecter</button>
            </li>
          ) : (
            <li>
              <Link to="/login">Se connecter</Link>
            </li>
          )}
          </ul>
        </div>
        <div className="titleone">
            <h2>Association de parents d'élèves</h2>
            <h1>AU COEUR DE L'ENFANCE</h1>
        </div>
    </> 
  );
};

export default Header;