import { useState } from "react";
import HeaderAdmin from "../../component/admin/HeaderAdmin";
import { useVerifyIfUserIsLogged } from "../../utilis/security-utilis";

const AdminCommentCreate = () => {

    useVerifyIfUserIsLogged();
  
    const [message, setMessage] = useState(null);

  
    const handleCreateComment = async (event) => {
        event.preventDefault();  
        const content = event.target.content.value;
        const commentToCreate = {
            content: content
          };
        
        const commentToCreateJson = JSON.stringify(commentToCreate);

        const token = localStorage.getItem("jwt");

        const createCommentResponse = await fetch("http://localhost:3000/comments", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token, // clé : valeur
            },
            body: commentToCreateJson,
        });

        if (createCommentResponse.status === 201) {
            setMessage("Le commentaire est créé !")
        } else {
            setMessage("Erreur !")
        }

    }
    return (
            <>
            <HeaderAdmin />
            {message && <p>{message}</p>}

            {/* 1. Je créé un formulaire afin de récupèrer les données qui doivent coller avec le model de l'API */}
        <form onSubmit ={handleCreateComment}>
                <div>
                    <label>
                        Votre commentaire :
                        <input type="text" name="content" />
                    </label>
                </div>                
                <input type="submit" />
        </form>
            </>
    )
}
export default AdminCommentCreate;