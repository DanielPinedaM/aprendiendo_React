/*
usando React y Fetch API lista la data de JSON placeholder de este link:
https://codesandbox.io/s/react-fetch-from-json-placeholder-en1n3?file=/src/index.js
*/

import { useState, useEffect } from 'react';

const FetchAPI = () => {
  const [posts, setPosts] = useState([]);

  const url = 'https://jsonplaceholder.typicode.com/posts';

  // ejecutar al re-cargar pagina
  useEffect(() => {
    fetch(url) // enviar peticion para listar data
      .then((res) => {
        if (!res.ok) {
          return Error('ocurrio error'); // mensaje de error
        }
        return res.json();
      })
      .then((data) => setPosts(data)); // guardar data en useState
  });

  return (
    <>
      <h1>Fetch API</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <b>post.title</b> {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchAPI;
