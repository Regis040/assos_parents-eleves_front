import { Link, useNavigate } from "react-router-dom";

const HeaderAdmin = () => {

  
    const navigate = useNavigate();
  
    const handleLogout = () => {
      // dégagerle token du local storage
      localStorage.removeItem("jwt");
  
      // redirige l'utilisateur vers la page de login
      navigate("/login");
    };

  return (
    <header>
            <nav>
        <ul>
          <li>
            <Link to="/admin/">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/articles">Gérer les articles</Link>
          </li>
          <li>
            <Link to="/admin/articles/create">Créer un article</Link>
          </li>
        </ul>
        <button onClick={handleLogout}>Se déconnecter</button>
      </nav>
    </header>
  );
};

export default HeaderAdmin;