import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../services/api";

export default function LocationDetail() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    api.get(`/location/${id}`)
      .then(res => {
        setLocation(res.data);

        
        Promise.all(res.data.residents.map(url => api.get(url)))
          .then(responses => setResidents(responses.map(r => r.data)))
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!location) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{location.name}</h1>
      <p>Tipo: {location.type}</p>
      <p>Dimensão: {location.dimension}</p>

      <h3>Residentes:</h3>
      <div className="cards">
        {residents.map(c => (
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
