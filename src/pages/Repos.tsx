import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom';

type Repositories = {
  full_name: string;
  description: string;
}

export function Repos() {
  const { data, isFetching } = useQuery<Repositories[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/leorejwan/repos')
    
    return response.data;
  }, {
    refetchOnWindowFocus: false,
    
  });

  return (
    <ul>
      { isFetching && <p>Carregando...</p> }
      {data?.map(repo => {
        return(
          <li key={repo.full_name}>
            <Link to={`repos/${repo.full_name}`}>
                {repo.full_name}
            </Link>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  );
}
