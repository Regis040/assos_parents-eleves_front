import React, { useEffect, useState } from "react";
import Header from "../../component/guest/Header";
import { Link } from "react-router-dom";

const ArticlesPage = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    (async () => {
      const articlesResponse = await fetch("http://localhost:3000/articles");

      const articlesResponseData = await articlesResponse.json();

      setArticles(articlesResponseData);
    })();
  }, []);

  return (
    <>
      <Header />

      <h1>Liste des articles : </h1>

      {articles ? (
        <>
          {articles.map((article) => {
            return (
              <article>
                <h2>{article.name}</h2>
                <Link to={`/article/details/${article.id}`}>Voir l'article</Link>
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