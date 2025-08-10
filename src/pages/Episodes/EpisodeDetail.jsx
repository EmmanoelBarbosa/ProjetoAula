import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../services/api";

export default function EpisodeDetail() {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api.get(`/episode/${id}`)
      .then(res => {
        setEpisode(res.data);

       
        Promise.all(res.data.characters.map(url => api.get(url)))
          .then(responses => setCharacters(responses.map(r => r.data)))
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!episode) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{episode.name}</h1>
      <p>Data de estreia: {episode.air_date}</p>

      <h3>Personagens:</h3>
      <div className="cards">
        {characters.map(c => (
          <Link key={c.id} to={`/characters/${c.id}`}>
            <div className="card">
              <img src={c.image} alt={c.name} />
              <h4>{c.name}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
