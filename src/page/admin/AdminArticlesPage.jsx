import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

const AdminArticlesPage = () => {
   
  const [articles, setArticles] = useState(null);

  
  const token = localStorage.getItem("jwt");
  const decodedToken = jwtDecode(token);

    
  useEffect(() => {
    (async () => {
      const articlesResponse = await fetch("http://localhost:3000/articles");
      const articlesResponseData = await articlesResponse.json();
   
      setArticles(articlesResponseData);
    })();
  }, []);


  const handleDeleteArticle = async (event, articleId) => {
   
    const token = localStorage.getItem("jwt");
    
    await fetch("http://localhost:3000/articles/" + articleId, {
        
      method: "DELETE",
    //   
      headers: { Authorization: "Bearer " + token },
    });
    
    const articlesResponse = await fetch("http://localhost:3000/articles");
    const articlesResponseData = await articlesResponse.json();

   
    setArticles(articlesResponseData);
  };

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
              
                {decodedToken.data.role !==1 && (
                  <button onClick={(event) => handleDeleteArticle(event, article.id)}>Supprimer</button>
                )}
                <Link to={`/admin/articles/update/${article.id}`}>Mise à jour de l'article</Link>
                
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