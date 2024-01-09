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
      <h1>Liste des articles : </h1>

      {articles ? (
        <>
          {articles.map((article) => {
            return (
                <article class="articlesdesign">
                    <h2>{article.articletitle}</h2>
                    <h4>{article.articlebody}</h4>                
                  
                    {decodedToken.data.role !==3 && (
                      <button onClick={(event) => handleDeleteArticle(event, article.id)}>Supprimer</button>
                    )}

                    <Link to={`/admin/articles/update/${article.id}`}>Mise à jour de l'article</Link>   
                    
                        <h2>Les commentaires</h2>
                    {comments ? (
                               <div class="commentstyle">                    
                                 {comments                        
                                    .filter((comment) => comment.ArticleId === article.id)
                                    .map((comment) => (
                                      <article key={comment.id}>                                                        
                                       <h2>{comment.content}</h2>     
                             		<button onClick={(event) => handleDeleteComment(event, comment.id)}>Supprimer</button>                          
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