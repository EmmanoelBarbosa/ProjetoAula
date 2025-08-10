import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function LocationList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    api.get("/location")
      .then(res => setLocations(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Localizações</h1>
      <div className="cards">
        {locations.map(loc => (
          <Link key={loc.id} to={`/locations/${loc.id}`}>
            <div className="card">
              <h3>{loc.name}</h3>
              <p>Tipo: {loc.type}</p>
              <p>Dimensão: {loc.dimension}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
