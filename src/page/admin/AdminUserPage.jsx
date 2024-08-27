
import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import Footer from "../../component/guest/Footer";
import { jwtDecode } from "jwt-decode";
import { useVerifyIfUserIsLogged } from "../../utilis/security-utilis";
import './AdminUserPage.scss';

const AdminUserPage = () => {

    useVerifyIfUserIsLogged();

    const [users, setUsers] = useState(null);
    const token = localStorage.getItem("jwt");
    const decodedToken = jwtDecode(token);
  
    useEffect(() => {
      (async () => {
        const usersResponse = await fetch("http://localhost:3000/users");
        const usersResponseData = await usersResponse.json();
        setUsers(usersResponseData);
      })();
    }, []);
  
    const handleDeleteUser = async (event, UserId) => {
        try {
          const token = localStorage.getItem("jwt");
          const response = await fetch(`http://localhost:3000/users/${UserId}`, {
            method: "DELETE",
            headers: { Authorization: "Bearer " + token },
          });
          
          if (!response.ok) { // Vérifie si la réponse n'est pas "ok" : zone 200-299)
            if (response.status === 403) {
              alert("Vous n'êtes pas autorisé à supprimer un utilisateur.");
            } else {
              alert("Une erreur est survenue lors de la suppression de l'utilisateur.");
            }
            return; // Stoppe l'exécution de la fonction si une erreur est survenue
          }
          
          const usersResponse = await fetch("http://localhost:3000/users");
          const usersResponseData = await usersResponse.json();
          setUsers(usersResponseData);
        } catch (error) {
          console.error("Error deleting user:", error);
          alert("Une erreur est survenue. Veuillez réessayer plus tard.");
        }
      };
      

    return (
        <>
            <HeaderAdmin />
            <div className="soustitre">
                 <h2>Vous êtes connecté en tant qu'admin : gérer les adhérents </h2>
            </div>
            {users?(
                <>
                    {users.map((user) => {
                        return (
                            <div>
                                <article id="loggerstyle">
                                     <div class="memberStyleAdmin">{user.username}</div>                                 
                                        {decodedToken.data.role !== 1 && (
                                         <button onClick={(event) => handleDeleteUser(event, user.id)}>Supprimer</button>                                   
                                        )}
                                </article>
                            </div>
                        );
                    }
                    )}
                </>
            ): (
                <p>En cours de chargement</p>
            )}
            <Footer />
        </>
    ) 
}

export default AdminUserPage;