import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

type Repositories = {
  full_name: string;
  description: string;
}

function App() {
  const { data : respositories, isFetching } = 
    useFetch<Repositories[]>('https://api.github.com/users/leorejwan/repos');

  return (
    <ul>
      { isFetching && <p>Carregando...</p> }
      {respositories?.map(repo => {
        return(
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  );
}

export default App;
