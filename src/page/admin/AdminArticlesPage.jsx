import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
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
    const token = localStorage.getItem("jwt");    
    await fetch("http://localhost:3000/articles/" + articleId, {        
      method: "DELETE",    //   
      headers: { Authorization: "Bearer " + token },
    });
    
    const articlesResponse = await fetch("http://localhost:3000/articles");
    const articlesResponseData = await articlesResponse.json();
   
    setArticles(articlesResponseData);
  };

  const handleDeleteComment = async (event, commentId) => {
    try {
      const token = localStorage.getItem("jwt");
      await fetch(`http://localhost:3000/comments/${commentId}`, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token },
      });
  
      const commentsResponse = await fetch("http://localhost:3000/comments");
      const commentsResponseData = await commentsResponse.json();
  console.log(commentsResponseData)
      setComments(commentsResponseData);
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };
  console.log(articles)
  return (
    <>
      <HeaderAdmin />
      <div className="soustitre">
        <h2>Vous êtes connecté en tant qu'admin : gérer les sujets et leurs commentaires </h2>
      </div>
            <div id="createArticle">
        <Link to="/admin/articles/create">Créer un nouvel article</Link>
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


    </>
  );
};

export default AdminArticlesPage;