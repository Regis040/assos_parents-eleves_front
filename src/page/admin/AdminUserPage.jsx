
import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
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
      await fetch("http://localhost:3000/users/" + UserId, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token },
      });  
      const usersResponse = await fetch("http://localhost:3000/users");
      const usersResponseData = await usersResponse.json();
      setUsers(usersResponseData);
    };

    return (
        <>
            <HeaderAdmin />
            <h2>Liste des adhérents</h2>
            {users?(
                <>
                    {users.map((user) => {
                        return (
                            <div>
                            <article id="loggerstyle">
                                 <h2>{user.username}</h2>                                 
                                    {decodedToken.data.role !== 3 && (
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
        </>
    ) 
}

export default AdminUserPage;