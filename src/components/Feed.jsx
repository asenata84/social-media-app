import { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import Authors from "./Authors";
import api from "../api";

const Feed = () => {
  const [selectedAuthor, setAuthor] = useState({});
  const [posts, setPosts] = useState([]);

  const setSelectedAuthor = (author) => {
    setAuthor(author);
  };

  useEffect(() => {
    api
      .getPosts()
      .then((result) => {
        setPosts(result);
      })
      .catch((err) => {
        console.log(
          "%c =========== err >>",
          "color:#669851;font-size:12px",
          err
        );
      });
  }, []);

  return (
    <div className="feed">
      <h1>Feed</h1>

      <Authors setSelectedAuthor={setSelectedAuthor} />

      {!selectedAuthor
        ? posts.map(({ title, body, id }) => (
            <Post
              key={id}
              id={id}
              title={title}
              body={body}
              authorName="<Author name>"
            />
          ))
        : posts
            .filter((item) => Number(item.userId) === Number(selectedAuthor.id))
            .map(({ title, body, id }) => (
              <Post
                key={id}
                id={id}
                title={title}
                body={body}
                authorName={selectedAuthor.name}
              />
            ))}
    </div>
  );
};

export default Feed;
