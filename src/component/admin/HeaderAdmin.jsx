import { Link, useNavigate } from "react-router-dom";
import "./HeaderAdmin.scss";

const HeaderAdmin = () => {

  
    const navigate = useNavigate();
  
    const handleLogout = () => {
      // dégagerle token du local storage
      localStorage.removeItem("jwt");
  
      // redirige l'utilisateur vers la page de login
      navigate("/login");
    };

  return (
    <div class="headeradmin">
      <nav id="navheaderadmin">
        <ul id="navheaderadminposition">
          <li>
            <Link to="/admin/">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/articles">Gérer les articles</Link>
          </li>
          <li>
            <Link to="/admin/articles/create">Créer un article</Link>
          </li>
          <li>
            <Link to="/admin/comments">Gérer les commentaires</Link>
          </li>
        </ul>
        <button onClick={handleLogout}>Se déconnecter</button>
      </nav>
    </div>
  );
};

export default HeaderAdmin;