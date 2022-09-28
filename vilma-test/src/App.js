import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import CharactersList from "./components/CharacterList";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import CharacterDetails from "./pages/CharacterDetails";
// import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <div>
        <div >
        {/* <NavBar/> */}
        <CharactersList/>
        </div>
      </div>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />

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
