
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useVerifyIfUserIsLogged } from "../../utilis/security-utilis";
import Footer from '../../component/guest/Footer'
import Header from '../../component/guest/Header'

const UserPage = () => {

        useVerifyIfUserIsLogged();
    
        const [user, setUser] = useState(null);
        const token = localStorage.getItem("jwt");
        const decodedToken = jwtDecode(token);
        const [newPassword, setNewPassword] = useState('');
      
        useEffect(() => {
            (async () => {
              const userResponse = await fetch(`http://localhost:3000/users/${decodedToken.dataId}`);
              const userResponseData = await userResponse.json();
              setUser(userResponseData.data);
              console.log(userResponseData.data);
            })();
          }, [decodedToken.dataId]);
      
        const handleDeleteUser = async (event) => {
          await fetch(`http://localhost:3000/users/${decodedToken.dataId}`, {
            method: "DELETE",
            headers: { Authorization: "Bearer " + token },
          });      
          const userResponse = await fetch("http://localhost:3000/users");
          const userResponseData = await userResponse.json();
          setUser(userResponseData);
        };

        const handleUpdateUser = async (event) => {
          await fetch(`http://localhost:3000/users/${decodedToken.dataId}`, {
            method: "PUT",
            headers: { 
              'Content-Type': 'application/json',
              Authorization: "Bearer " + token 
            },
            body: JSON.stringify({ newPassword, userId: decodedToken.dataId })
          });
          setUser((prevUser) => ({
            ...prevUser,            
          }));          
        };
    
    return (
        <>
            <Header/>
            <main>
              <h2>Votre espace personnel</h2>
              {user ? (
                    <article>
                      <div>
                        <h2 className="user">{user.username}</h2>
                        {decodedToken.data.role !== 3 && (
                            <button onClick={handleDeleteUser}>Supprimer</button>
                        )}
                      </div>
                      <div>
                        <p>{user.password} </p>
                        {decodedToken.data.role !== 3 && (
                          <>
                            <div>
                              <label htmlFor="newPassword">Nouveau mot de passe:</label>
                              <input
                                type="password"
                                className="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                              />
                            </div>
                            <button onClick={handleUpdateUser}>Modifier</button>
                          </>
                        )}
                      </div>
                        
                    </article>
                ) : (
                    <p>En cours de chargement</p>
              )}                
            </main>
            <Footer/>
        </>
    )
}
export default UserPage;