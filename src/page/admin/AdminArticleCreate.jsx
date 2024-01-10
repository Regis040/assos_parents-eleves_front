import { useState } from "react";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import { useVerifyIfUserIsLogged } from "../../utilis/security-utilis";
import { jwtDecode } from "jwt-decode";

const AdminArticleCreate = () => {

    useVerifyIfUserIsLogged();

    const token = localStorage.getItem("jwt");
    const decodedToken = jwtDecode(token);
  
    const [message, setMessage] = useState(null);

  
    const handleCreateArticle = async (event) => {
  
        event.preventDefault();
  
        const articletitle = event.target.articletitle.value;
        const articlebody = event.target.articlebody.value;
   
        const articleToCreate = {
          articletitle: articletitle,
          articlebody: articlebody,
          };

      
          const articleToCreateJson = JSON.stringify(articleToCreate);

          const token = localStorage.getItem("jwt");


          const createArticleResponse = await fetch("http://localhost:3000/articles", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token, 
            },
            body: articleToCreateJson,
          });
   
          if (createArticleResponse.status === 201) {
            setMessage("l'article est bien créé !")
          } else {
            setMessage("Erreur !")
          }
    }

    return (
            <>
                 <HeaderAdmin />
                {message && <p>{message}</p>}
           
                <form onSubmit ={handleCreateArticle} className="formposition">
                        <div>
                            <label htmlFor="articletitle">Titre de l'article:</label>
                            <input type="text" id="articletitle" name="articletitle" required />
                        </div>
                        <div>
                            <label htmlFor="articlebody">Contenu de l'article:</label>
                            <textarea id="articlebody" name="articlebody" rows="5" required></textarea>
                        </div>
                        {decodedToken.data.role !== 3 && (
                            <button type="submit">Soumettre l'article</button>              
                        )}                        
                </form>
            </>
    )
}
export default AdminArticleCreate;

