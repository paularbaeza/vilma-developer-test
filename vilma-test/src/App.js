import './App.css';
import NavBar from './components/NavBar';
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"
import CharactersList from './components/CharacterList';
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import CharacterDetails from './pages/CharacterDetails';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar/>
        <CharactersList/>
      </div>
      <div>
      <Routes>
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
