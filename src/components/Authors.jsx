import { useEffect, useState } from "react";
import api from "../api";

const Authors = (props) => {
  const { setSelectedAuthor } = props;
  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setAuthor] = useState({});

  const handleSelectAuthors = (e) => {
    const selected = e.target.value;

    setSelectedAuthor(
      authors.find((item) => Number(item.id) === Number(selected))
    );
  };

  const handleOptionClick = (e) => {};

  useEffect(() => {
    setAuthor(selectedAuthor);
  }, [selectedAuthor, setAuthor]);

  useEffect(() => {
    api
      .getAuthors()
      .then((authorsData) => {
        setAuthors(authorsData);
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
    <select onChange={handleSelectAuthors}>
      {authors &&
        authors.map((author) => (
          <option onClick={handleOptionClick} value={author.id} key={author.id}>
            {author.name}
          </option>
        ))}
    </select>
  );
  // <div>{"<Favourite authors selector>"}</div>;
};

export default Authors;
