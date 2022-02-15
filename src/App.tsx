import { useFetch } from "./hooks/useFetch";
import { useQuery } from 'react-query'
import axios from 'axios'

type Repositories = {
  full_name: string;
  description: string;
}

function App() {
  const { data, isFetching } = useQuery<Repositories[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/leorejwan/repos')
    
    return response.data;
  
  });

  return (
    <ul>
      { isFetching && <p>Carregando...</p> }
      {data?.map(repo => {
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
