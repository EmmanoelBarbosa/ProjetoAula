import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CharacterList from "./pages/Characters/CharacterList";
import CharacterDetail from "./pages/Characters/CharacterDetail";
import EpisodeList from "./pages/Episodes/EpisodeList";
import EpisodeDetail from "./pages/Episodes/EpisodeDetail";
import LocationList from "./pages/Locations/LocationList";
import LocationDetail from "./pages/Locations/LocationDetail";

export default function App() {
  return (
    <Router>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <Link to="/characters" style={styles.link}>Personagens</Link>
          <Link to="/episodes" style={styles.link}>Episódios</Link>
          <Link to="/locations" style={styles.link}>Localizações</Link>
        </nav>
      </header>

      <main style={styles.main}>
        <Routes>
         
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />

         
          <Route path="/episodes" element={<EpisodeList />} />
          <Route path="/episodes/:id" element={<EpisodeDetail />} />

         
          <Route path="/locations" element={<LocationList />} />
          <Route path="/locations/:id" element={<LocationDetail />} />

          
          <Route path="*" element={<CharacterList />} />
        </Routes>
      </main>
    </Router>
  );
}

const styles = {
  header: {
    backgroundColor: "#222",
    padding: "15px 0",
    textAlign: "center",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
  },
  main: {
    padding: "20px",
  }
};
