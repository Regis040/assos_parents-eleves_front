// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.scss";


const Header = () => {
  return (
    <>
      <header>
        <div id="loginarea">
          <ul>
            <li><img className="logo-facebook" src="../../assets/imgs/facebook.png" alt="le logo de facebook" /></li>
            <li><Link to="/login">se connecter</Link></li>
          </ul>
      </div>
            <nav id="navheader">
              <img className="logo" src="../../assets/imgs/logo.png" alt="le logo" />
              <ul class="ulresponsive">
                <li>Accueil</li>
                <li>Actualiés</li>
                <li>Les établissements</li>
                <li>A propos de nous</li>
              </ul>
            </nav>
            <h1>AU COEUR DE L'ENFANCE</h1>
      </header>
    </> 
  );
};

export default Header;