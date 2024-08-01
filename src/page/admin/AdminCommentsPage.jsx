import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../component/admin/HeaderAdmin";

const AdminCommentsPage = () => {
   
  const [comments, setComments] = useState(null);  
    
  useEffect(() => {
    (async () => {
      const commentsResponse = await fetch("http://localhost:3000/comments");
      const commentsResponseData = await commentsResponse.json();   
      setComments(commentsResponseData);
    })();
  }, []);


  const handleDeleteComment = async (event, commentId) => {
    try {
      const token = localStorage.getItem("jwt");
      await fetch(`http://localhost:3000/comments/${commentId}`, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token },
      });
  
      const commentsResponse = await fetch("http://localhost:3000/comments");
      const commentsResponseData = await commentsResponse.json();
  
      setComments(commentsResponseData);
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <>
    <HeaderAdmin />
      <h1>Les commentaires: </h1>

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