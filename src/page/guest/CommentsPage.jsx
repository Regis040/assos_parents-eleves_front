import React, { useEffect, useState } from "react";
import Header from "../../component/guest/Header";
import { Link } from "react-router-dom";

const CommentsPage = () => {
  const [comments, setComments] = useState(null);

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

      <h2>Les commentaires : </h2>

      {comments ? (
        <>
          {comments.map((comment) => {
            return (
              <article>
                <h2>{comment.content}</h2>
                <Link to={`/comment/details/${comment.id}`}>Voir le commentaire</Link>
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

export default CommentsPage;