import { Link } from "react-router-dom";
import "./Header.scss";


const Header = () => {
  return (
    <header>
          <nav>
            <img class="logo" src="../../assets/imgs/logo.png" alt="le logo" />
            <ul>
              <li><Link to="/">Home</Link></li>
            </ul>
          </nav>
          <h1>AU COEUR DE L'ENFANCE</h1>
    </header>
  );
};

export default Header;