import { useParams } from "react-router-dom";
import Header from "../../component/guest/Header";
import { useEffect, useState } from "react";

const CommentEachPage = () => {
  const { id } = useParams();

  const [comment, setComment] = useState(null);

  useEffect(() => {
    (async () => {
      const commentResponse = await fetch("http://localhost:3000/comments/" + id);
      const commentResponseData = await commentResponse.json();
      setComment(commentResponseData);
    })();
  }, [id]);

  return (
    <>
      <Header />

      {comment ? (
        <article>
          <h2>{comment.data.content}</h2>          
        </article>
      ) : (
        <p>En cours de chargement</p>
      )}
    </>
  );
};

export default CommentEachPage;