import { useState } from "react";
import "./PostComments.css";
import api from "../api";

const PostComments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const handleGetComments = async () => {
    console.log(
      "%c =========== postId >>",
      "color:#669851;font-size:12px",
      postId
    );
    try {
      const result = await api.getComments(postId);

      console.log(
        "%c =========== result >>",
        "color:#669851;font-size:12px",
        result
      );

      setComments(result);
    } catch (error) {
      console.log(
        "%c =========== error >>",
        "color:#669851;font-size:12px",
        error
      );
    }
  };

  return (
    <>
      <div onClick={handleGetComments} className="comments-btn">
        View post comments
      </div>
      <div>
        {comments.map((comment) => (
          <p>{comment.body}</p>
        ))}
      </div>
    </>
  );
};

export default PostComments;
