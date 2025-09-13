import React, { useEffect, useState } from "react";
import axios from "axios";
import "./posts.css";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const PostsSearch = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const getApiData = async () => {
    const data = await axios.get(BASE_URL);
    setPosts(data.data);
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div className="my-container">
      <input type="search" onChange={(e) => setSearch(e.target.value)} />
      <h1>Welcome to Posts</h1>
      <table id="posts">
        <thead>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </thead>
        <tbody>
          {" "}
          {posts
            .filter(
              (element) =>
                element.title.toLowerCase().includes(search) ||
                element.body.toLowerCase().includes(search)
            )
            .map((element) => {
              return (
                <tr key={element.id}>
                  <td>{element.id}</td> <td>{element.title}</td>{" "}
                  <td>{element.body}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
