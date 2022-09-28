import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function CharactersList() {
  const [charactersList, setCharactersList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState (1)

  const navigate = useNavigate();

  useEffect(() => {
    getCharactersList();
  }, [page]);

  const getCharactersList = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
      console.log(response.data.results)
      setCharactersList(response.data.results);
      setIsFetching(false);
    } catch {
      navigate("/error");
    }
  };

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);

  };

  const handleSearchResults = async () => {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/people?search=${search}`
      );
      setCharactersList(response.data.results);
      setSearch("")
    } catch {
      navigate("/error");
    }
  };

  const handleNextPage = () => {
    let nextPage = page + 1 
setPage(nextPage)
  }

  const handlePreviousPage = () => {
    let previousPage = page - 1
    setPage (previousPage)
  }

  console.log (page)
  //manejo de la seccion de loading
  if (isFetching === true) {
    //si el componente está buscando data
    return <h3>...Loading</h3>;
  }

  return (
    <div id="characters-list">
      <div id="search">
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleSearch}
        />
        <button onClick={handleSearchResults}>Search</button>
      </div>
      {charactersList.map((eachCharacter) => {
        return (
          <div id="each-character" key={eachCharacter.name}>
            <Link to={`/${eachCharacter.name}/details`} className="no-deco">
              {eachCharacter.name}
            </Link>
          </div>
        );
      })}

      <button onClick = {handlePreviousPage} className="list-btn">Previous page</button>
      <button onClick = {handleNextPage} className="list-btn">Next page</button>
    </div>
  );
}

export default CharactersList;
