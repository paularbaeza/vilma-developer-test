import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import CharactersList from "./pages/CharacterList";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import CharacterDetails from "./pages/CharacterDetails";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div>
        <div >
        <NavBar/>
        </div>
      </div>
      <div>
        <Routes>
        <Route path="/" element={<CharactersList />} />

          <Route path="/:name/details" element={<CharacterDetails />} />

          {/* componentes para error handling */}
          <Route path="/error" element={<Error />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
