import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import { jwtDecode } from "jwt-decode";

const AdminCommentsPage = () => {
   
  const [comments, setComments] = useState(null);

  
  const token = localStorage.getItem("jwt");
  const decodedToken = jwtDecode(token);

    
  useEffect(() => {
    (async () => {
      const commentsResponse = await fetch("http://localhost:3000/comments");
      const commentsResponseData = await commentsResponse.json();
   
      setComments(commentsResponseData);
    })();
  }, []);


  const handleDeleteComment = async (event, commentId) => {
   
    const token = localStorage.getItem("jwt");
    
    await fetch("http://localhost:3000/comments/" + commentId, {
        
      method: "DELETE",
    //   
      headers: { Authorization: "Bearer " + token },
    });
    
    const commentsResponse = await fetch("http://localhost:3000/comments");
    const commentsResponseData = await commentsResponse.json();

   
    setComments(commentsResponseData);
  };

  return (
    <>
    <HeaderAdmin />
      <h1>Liste des articles à commenter: </h1>

      {comments ? (
        <>
          {comments.map((comment) => {
            return (
              <article>
                <h2>{comment.content}</h2>               
                              
                  <button onClick={(event) => handleDeleteComment(event, comment.id)}>Supprimer</button>
               
              </article>
            );
          })}
        </>
      ) : (
        <p>En cours de chargement</p>
      )}
    </>
  );
};

export default AdminCommentsPage;