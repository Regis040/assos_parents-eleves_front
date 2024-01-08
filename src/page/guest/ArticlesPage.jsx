import React, { useEffect, useState } from "react";
import Header from "../../component/guest/Header";
import { Link, useParams } from "react-router-dom";
import "./ArticlesPage.scss";

const ArticlesPage = () => {
  const [articles, setArticles] = useState(null);
  const [comments, setComments] = useState(null);
  const [articlesId, setArticlesId] = useState(null);

  const {id}=useParams();

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
      const articleidResponse = await fetch("http://localhost:3000/articles/" + id);
      const articleidResponseData = await articleidResponse.json();
      setArticlesId(articleidResponseData);
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
    //on teste la réponse via un boolen si réponse ou si pas de réponse via le .ok
    if (commentResponse.ok) {
    //la fonction alert permet de comuniquer un résultat 
      alert("Commentaire créé.");
      
      window.location.reload();
    } else {
      alert("Le commentaire n'as pu être créé. Veuillez rééssayer. ");
    }

  } catch (error) {
    alert("Une erreur est survenue. Veullez rééssayer");
  }    
  };


  return (
    <>
      <Header />
        <div class="articlestyle"> </div>
          <h2>Les sujets du mois : </h2>
          {articles ? (
            <>
              {articles.map((article) => {
                return (
                  <article class="articlestyle">
                    <h2>{article.articlebody}</h2>
                        <h2>Les commentaires : </h2>
                            {comments ? (
                               <div>                    
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

                            <form onSubmit={(event) => handleCreateComment(event, article.id)}>                  
                              <label >
                                Commentez  : 
                                <textarea  type="text" name="content" />
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


    </>
  );
};

export default ArticlesPage;