import { useParams } from "react-router-dom";
import Header from "../../component/guest/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArticleEachPage = () => {
  const { id } = useParams();

  const [article, setArticle] = useState(null);

  useEffect(() => {
    (async () => {
      const articleResponse = await fetch("http://localhost:3000/articles/" + id);
      const articleResponseData = await articleResponse.json();

      setArticle(articleResponseData);
    })();
  }, [id]);

  return (
    <>
      <Header />

      {article ? (
        <article>
          <h2>{article.data.articletitle}</h2> 
          <h4>{article.data.articlebody}</h4>     

          <Link to="/comments">Commentez</Link> 

           
        </article>
      ) : (
        <p>En cours de chargement</p>
      )}
    </>
  );
};

export default ArticleEachPage;