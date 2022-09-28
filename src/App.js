import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import CharactersList from "./components/CharacterList";
import CharacterDetails from "./pages/CharacterDetails";
import Home from "./pages/Home";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <CharactersList />
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name/details" element={<CharacterDetails />} />

          {/* error handling components*/}
          <Route path="/error" element={<Error />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
