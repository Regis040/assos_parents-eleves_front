import { Link } from "react-router-dom";
import '../../App.css';
import "./Header.scss";


const Header = () => {
  return (
    <>
      <header>
        <div id="loginarea">
          <ul>
            <li><Link to="https://www.facebook.com/aucoeurdelenfance40"><img className="logo-facebook" src="../../assets/imgs/facebook.png" alt="facebook" /></Link></li>
            <li><Link to="/register">Nous rejoindre</Link></li>
            <li><Link to="/login">se connecter</Link></li>
          </ul>
        </div>
        <nav id="navheader">
          <img className="logo" src="../../assets/imgs/logo.png" alt="le logo" />
            <ul class="ulresponsive">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="#liennewshome">Actualités</Link></li>
              <li><Link to="/#lienchools">Les établissements</Link></li>
              <li><Link to="/aboutus">A propos de nous</Link></li>
            </ul>
        </nav>
          <h1>AU COEUR DE L'ENFANCE</h1>
      </header>
    </> 
  );
};

export default Header;