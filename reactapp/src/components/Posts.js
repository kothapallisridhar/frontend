import React, { useEffect, useState } from "react";
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const Posts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      <table>
        {data.map((element) => {
          return (
            <>
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.title}</td>
                <td>{element.body}</td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};
