import { useEffect, useState } from "react";

type Repositories = {
  full_name: string;
  description: string;
}


function App() {
  const [data, setData] = useState<Repositories[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/leorejwan/repos')
      .then(response =>  response.json())
      .then(data => {
        setData(data);
      })
  }, [])


  return (
    <ul>
      {data.map(repo => {
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
