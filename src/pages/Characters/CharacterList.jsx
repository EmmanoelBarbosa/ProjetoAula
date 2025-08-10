import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api.get("/character")
      .then(res => setCharacters(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Personagens</h1>
      <div className="cards">
        {characters.map(c => (
          <Link key={c.id} to={`/characters/${c.id}`}>
            <div className="card">
              <img src={c.image} alt={c.name} />
              <h3>{c.name}</h3>
              <p>Status: {c.status}</p>
              <p>Espécie: {c.species}</p>
              <p>Localização: {c.location.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
