import React, { useEffect, useState } from "react";
import Header from "../../component/guest/Header";
import { Link, useParams } from "react-router-dom";
import "./ArticlesPage.scss";

const ArticlesPage = () => {
  const [articles, setArticles] = useState(null);
  const [comments, setComments] = useState(null);

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
                          <>
                            {comments.map((comment) => {
                              return (
                                <article class="commentstyle">                            
                                  <h2>{comment.content}</h2>
                                  <h2>{comment.id}</h2>
                                  <Link to={`/comments/create`}>Créer un commentaire</Link>
                                </article>
                              );
                            })}
                          </>
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

export default ArticlesPage;