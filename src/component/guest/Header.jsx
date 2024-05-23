import { Link, useNavigate} from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./Header.scss";


const Header = () => {

  const token = localStorage.getItem("jwt");
  // const decodedToken = jwtDecode(token);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Je dégage le token du local storage
    localStorage.removeItem("jwt");
    // je redirige l'utilisateur vers la page de login
    navigate("/login");
  };

  // const adminPage = () => {
  //   // je redirige l'utilisateur vers la page de dashboard
  //   navigate("/admin/");
  // };

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
            {/* {decodedToken.data.role !== 3 && (
              <li>
                <button onClick={adminPage}>Zone Administrateur</button>
              </li>
              )} */}

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