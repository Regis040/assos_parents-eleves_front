import { useState } from "react";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import Footer from "../../component/guest/Footer";
import { useVerifyIfUserIsLogged } from "../../utilis/security-utilis";
import { jwtDecode } from "jwt-decode";
import "./AdminArticleCreate.scss";

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
            setMessage("le sujet a bien été créé !")
          } else {
            setMessage("le sujet n'a pas pu être créé!")
          }
    }

    return (
            <>
                <HeaderAdmin />
                <div className="soustitre">
                  <h2>Vous êtes connecté en tant qu'admin : Créer un commentaire </h2>
                </div>
                {message && <p>{message}</p>}
           
                <form onSubmit ={handleCreateArticle} className="formposition">
                        <div>
                            <h3>Titre du sujet:</h3>
                            <div className="createInputs">
                             <input placeholder="Entrer le titre de l'article" type="text"  name="articletitle" required />
                            </div>
                        </div>
                        <div>
                            <h3>Contenu du sujet:</h3>
                            <div className="createInputs">
                              <textarea placeholder="Entrer le sujet de l'article" name="articlebody" rows="5" required></textarea>
                            </div>
                        </div>
                        {decodedToken.data.role !== 3 && (
                            <button type="submit">Soumettre le sujet</button>              
                        )}                        
                </form>
                <Footer />
            </>
    )
}
export default AdminArticleCreate;

