import { Link } from "react-router-dom";
import "./Header.scss";


const Header = () => {
  return (
    <>      
        <div id="headerstyle">
          <div id="logoheader">
            <img id="logo" src="../../assets/imgs/logo.png" alt="le logo" />
          </div>
          <ul id="navheader">                       
          <Link to="/"><li>Accueil</li></Link>
            <li>|</li>
            <Link to="/"><li>Actualités</li></Link>
            <li>|</li>
            <Link to="/"><li>Les établissements</li></Link>
            <li>|</li>
            <Link to="/aboutus"><li>A propos de nous</li></Link>
            <li>|</li>
            <Link to="/register"><li>S'inscrire</li></Link>
            <li>|</li>
            <Link to="/login"><li>Se connecter</li></Link>
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