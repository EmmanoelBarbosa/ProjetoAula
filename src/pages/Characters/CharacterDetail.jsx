import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../services/api";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    api.get(`/character/${id}`)
      .then(res => setCharacter(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!character) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Espécie: {character.species}</p>
      <p>Origem: {character.origin.name}</p>
      <p>Localização: {character.location.name}</p>

      <h3>Episódios:</h3>
      <ul>
        {character.episode.map((ep, index) => {
          const epId = ep.split("/").pop();
          return (
            <li key={index}>
              <Link to={`/episodes/${epId}`}>Episódio {epId}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
