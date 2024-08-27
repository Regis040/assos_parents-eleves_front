import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./Header.scss";

const Header = () => {
  const token = localStorage.getItem("jwt");
  const navigate = useNavigate();

  let isAdmin;
  if (token) {
    const decodedToken = jwtDecode(token);
    isAdmin = decodedToken.RoleId !== 3;
  }

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    navigate("/login");
  };

  return (
    <>      
      <div id="headerstyle">
        <div id="logoheader">
          <img id="logo" src="../assets/imgs/logo.png" alt="le logo" />
        </div>            
        <label htmlFor="toggle">☰</label>
        <input type="checkbox" id="toggle" />
        <ul id="navheader">                       
          <li><Link to="/">Accueil</Link></li>
          <li>|</li>
          <li><Link smooth to="/#news-section">Actualités</Link></li>
          <li>|</li>
          <li><Link smooth to="/#schools-section">Les établissements</Link></li>
          <li>|</li>
          <li><Link to="/aboutus">A propos de nous</Link></li>
          <li>|</li>
          <li><Link to="/register">S'inscrire</Link></li>
          <li>|</li>
          {isAdmin && (
            <>
              <li><Link to="/admin">Admin</Link></li>
              <li>|</li>
            </>
          )}
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
