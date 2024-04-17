import React, { useEffect, useState } from "react";
import Header from "../../component/guest/Header";
import { useParams } from "react-router-dom";
import "./ArticlesPage.scss";
import './Form.scss';

const ArticlesPage = () => {
  const [articles, setArticles] = useState(null);
  const [comments, setComments] = useState(null);
  const [articlesId, setArticlesId] = useState(null);
  console.log(articles)
  const { id }=useParams ();

  const token = localStorage.getItem("jwt");

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

  useEffect(() => {
    (async () => {
      const articleIdResponse = await fetch("http://localhost:3000/articles/" + id);
      const articleIdResponseData = await articleIdResponse.json();
      setArticlesId(articleIdResponseData);
    })();
  }, [id]);



  const handleCreateComment = async (event, articleId) => {
    event.preventDefault(); 
    
    const content = event.target.content.value;     
   
    const commentToCreate = {
      content: content,      
      ArticleId: articleId,
    };
    console.log(commentToCreate)    
    
    const commentToCreateJson = JSON.stringify(commentToCreate);
    
    try {
      const commentResponse = await fetch("http://localhost:3000/comments" , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",         
        Authorization: "Bearer " + token,
      },     
      body: commentToCreateJson,
      
    });
      console.log(commentToCreate)

    if (commentResponse.ok) {   
      alert("Commentaire créé.");      
      window.location.reload();
    } else {
      alert("Le commentaire n'as pu être créé. Etes-vous connecté ?. ");
    }

    } catch (error) {
      alert("Une erreur est survenue. Etes-vous connecté ?");
    }    
    };


  return (
    <>
      <Header />
          <div> 
              <div class="soustitre">
                  <h2>Les sujets du mois</h2>
              </div>
              {articles ? (
                <>
                  {articles.map((article) => {
                   return (
                       <article class="articlestyle">
                          <h2 class="sujetstyle">{article.articlebody}</h2>
                          <h2 class="h2style">Les commentaires : </h2>
                            {comments ? (
                               <div className="commentstyle">                    
                                 {comments                        
                                    .filter((comment) => comment.ArticleId === article.id)
                                    .map((comment) => (
                                      <article key={comment.id}>                                                        
                                        <p>l'adhérent : {comment.User.username}</p>
                                        <p>a commenté : {comment.content}</p>                            
                                      </article>
                                    ))}                  
                                </div>
                            ) : (
                              <p>En cours de chargement</p>
                            )}

                            {comments && comments.filter((comment) => comment.ArticleId === article.id).length === 0 && (
    <p className="commentstyle">Soyez le premier à commentez ce sujet</p>
  )}

                            <form onSubmit={(event) => handleCreateComment(event, article.id)}>                  
                              <label >                               
                                <textarea placeholder="Vos commentaires" type="text" name="content" />
                              </label>
                              <input className="submitBtn" type="submit" />
                            </form>
                  </article>
                );
              })}         
            </>
          ) : (
            <p>En cours de chargement</p>
          )}
        
         </div>
    </>
  );
};

export default ArticlesPage;