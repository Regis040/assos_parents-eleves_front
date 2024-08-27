import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import './AdminArticlesPage.scss';
import './AdminArticleUpdate.scss';

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
  
    try {
      const updateArticleResponse = await fetch(`http://localhost:3000/articles/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: articleUpdateDataJson,
      });
  
      if (!updateArticleResponse.ok) { // Vérifie si la réponse n'est pas "ok"
        if (updateArticleResponse.status === 403) {
          setMessage("Vous n'avez pas l'autorisation pour modifier le sujet");
        } else {
          setMessage("Une erreur est survenue lors de la mise à jour du sujet.");
        }
        return; // Stoppe l'exécution si une erreur est survenue
      }
  
      setMessage("Mise à jour effectuée");
    } catch (error) {
      console.error("Error updating article:", error);
      setMessage("Une erreur est survenue. Veuillez réessayer plus tard.");
    }
  };

  return (
    <>
      <HeaderAdmin />     
      <div className="soustitre">
        <h2>Vous êtes connecté en tant qu'admin : Mettre à jour le sujet sélectionné </h2>
      </div>
      <div>  
          <>{message && <p>{message}</p>}</>
          {article && (
            <form className="updateFormPosition" onSubmit={handleUpdateArticle}>
             <div>
               <label>
                  Nom :  
                  <input type="text" name="articletitle" defaultValue={article.articletitle} />
               </label>
              </div>
              <div>
                <label>
                  le sujet :
                  <textarea type="text" id="subjectSize" name="articlebody" defaultValue={article.articlebody} />
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