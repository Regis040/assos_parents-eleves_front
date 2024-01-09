import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import './AdminArticlesPage.scss';

const AdminArticleUpdate = () => {
   
  const { id } = useParams();

  const [article, setArticle] = useState(null);

  const [message, setMessage] = useState(null);

  useEffect(() => {
    (async () => {
      const articleResponse = await fetch("http://localhost:3000/articles/" + id);
      const articleResponseData = await articleResponse.json();
      setArticle(articleResponseData.data);
    })();
  }, [id]);


  const handleUpdateArticle = async (event) => {
    event.preventDefault();

    const articletitle = event.target.articletitle.value;
    const articlebody = event.target.articlebody.value;   
  
    const articleUpdateData = {
      articletitle: articletitle,
      articlebody: articlebody,
    };

    const articleUpdateDataJson = JSON.stringify(articleUpdateData);

    const token = localStorage.getItem("jwt");

    const updateArticleResponse = await fetch("http://localhost:3000/articles/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: articleUpdateDataJson,
    });

    if (updateArticleResponse.status === 201) {
      setMessage("Mise à jour OK");
    } else {
      setMessage("Erreur");
    }
  };

  return (
    <>
    <HeaderAdmin />
    <div>
  
    <>{message && <p>{message}</p>}</>
      {article && (
        <form onSubmit={handleUpdateArticle}>
          <div>
            <label>
              Nom :
              <input type="text" name="articletitle" defaultValue={article.articletitle} />
            </label>
          </div>
          <div>
            <label>
              le sujet :
              <input type="text" name="articlebody" defaultValue={article.articlebody} />
            </label>
          </div>   

          <input type="submit" />
        </form>
      )}
    </div>
    </>
  );
};

export default AdminArticleUpdate;