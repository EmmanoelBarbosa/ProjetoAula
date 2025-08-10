import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    api.get("/episode")
      .then(res => setEpisodes(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Episódios</h1>
      <div className="cards">
        {episodes.map(ep => (
          <Link key={ep.id} to={`/episodes/${ep.id}`}>
            <div className="card">
              <h3>{ep.name}</h3>
              <p>Data de estreia: {ep.air_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
