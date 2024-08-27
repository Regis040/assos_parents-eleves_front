import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import Footer from "../../component/guest/Footer";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

const AdminArticlesPage = () => {
   
  const [articles, setArticles] = useState(null);
  const [comments, setComments] = useState(null);  
  
  const token = localStorage.getItem("jwt");
  const decodedToken = jwtDecode(token);
    
  useEffect(() => {
    (async () => {
      const articlesResponse = await fetch("http://localhost:3000/articles");
      const articlesResponseData = await articlesResponse.json();   
      setArticles(articlesResponseData);
    })();
  }, []);

 useEffect(() => {
    (async () => {
      const commentsResponse = await fetch("http://localhost:3000/comments");
      const commentsResponseData = await commentsResponse.json();   
      setComments(commentsResponseData);
    })();
  }, []);

  const handleDeleteArticle = async (event, articleId) => {
    try {
      const token = localStorage.getItem("jwt");
      const response = await fetch(`http://localhost:3000/articles/${articleId}`, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token },
      });
      
      if (!response.ok) { // Vérifie si la réponse n'est pas "ok" : plage 200-299)
        if (response.status === 403) {
          alert("Vous n'êtes pas autorisé à supprimer cet article.");
        } else {
          alert("Une erreur est survenue lors de la suppression de l'article.");
        }
        return; // Stoppe l'exécution de la fonction si une erreur est survenue
      }
      
      const articlesResponse = await fetch("http://localhost:3000/articles");
      const articlesResponseData = await articlesResponse.json();
      setArticles(articlesResponseData);
    } catch (error) {
      console.error("Error deleting article:", error);
      alert("Une erreur est survenue. Veuillez réessayer plus tard.");
    }
  };
  

  const handleDeleteComment = async (event, commentId) => {
    try {
      const token = localStorage.getItem("jwt");
      const response = await fetch(`http://localhost:3000/comments/${commentId}`, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token },
      });
      
      if (!response.ok) { // Vérifie si la réponse n'est pas "ok" : plage 200-299
        if (response.status === 403) {
          alert("Vous n'êtes pas autorisé à supprimer un commentaire.");
        } else {
          alert("Une erreur est survenue lors de la suppression du commentaire.");
        }
        return; // Stoppe l'exécution de la fonction si une erreur est survenue
      }
      
      const commentsResponse = await fetch("http://localhost:3000/comments");
      const commentsResponseData = await commentsResponse.json();
      setComments(commentsResponseData);
    } catch (error) {
      console.error("Error deleting comment:", error);
      alert("Une erreur est survenue. Veuillez réessayer plus tard.");
    }
  };
  
  
  return (
    <>
      <HeaderAdmin />
      <div className="soustitre">
        <h2>Vous êtes connecté en tant qu'admin : gérer les sujets et leurs commentaires </h2>
      </div>
      <div id="createArticle">
        <Link to="/admin/articles/create">Créer un sujet</Link>
      </div>
      {articles ? (
        <>
          {articles.map((article) => {
            return (
                <article class="articlesdesign">                    
                    <h2 className="subjetsStyle">{article.articlebody}</h2>  
                     {decodedToken.data.role !==3 && (
                        <button onClick={(event) => handleDeleteArticle(event, article.id)}>Supprimer ce sujet</button>
                     )}
                     {decodedToken.data.role !==3 && (
                       <Link to={`/admin/articles/update/${article.id}`}>Mettre à jour ce sujet</Link>  
                     )}
                                  
                        <h3 className="commentStyleTitle">- LES COMMENTAIRES -</h3>
                         {comments ? (
                               <div>                    
                                 {comments                        
                                    .filter((comment) => comment.ArticleId === article.id)
                                    .map((comment) => (
                                      <article key={comment.id}>                                                        
                                        <h4  class="commentstyle">{comment.content}</h4>     
                                        {decodedToken.data.role !==3 && (
                                          <button onClick={(event) => handleDeleteComment(event, comment.id)}>Supprimer ce commentaire</button>    
                                         )}                             	        	                      
                                      </article>
                                    ))}                  
                                </div>
                            ) : (
                              <p>En cours de chargement</p>
                            )} 
                </article>
            );
          })}
        </>
      ) : (
        <p>En cours de chargement</p>
      )}
      <Footer />
    </>
  );
};
export default AdminArticlesPage;