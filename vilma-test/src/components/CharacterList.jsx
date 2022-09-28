import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function CharactersList() {
  const [charactersList, setCharactersList] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(true);

  const navigate = useNavigate();

  //useEffect calling the getCharacterList function when the component mounts and update it every time the page state changes
  useEffect(() => {
    getCharactersList();
  }, [page]);

  // get the characters list from de API
  const getCharactersList = async () => {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/people/?page=${page}`
      );
      setCharactersList(response.data.results);
      setIsFetching(false);
    } catch {
      navigate("/error");
    }
  };

  //change the search state to what the user is looking for
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  //filter the list in order to only show the results of the search
  const handleSearchResults = async () => {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/people?search=${search}`
      );
      setCharactersList(response.data.results);
      setSearch(""); //clean the search input once its submitted
    } catch {
      navigate("/error");
    }
  };

  //change the page state in order to change the call to the API and get the next 10 characters
  const handleNextPage = () => {
    let nextPage = page + 1;
    setPage(nextPage);
  };

  //change the page state in order to change the call to the API and get the previous 10 characters
  const handlePreviousPage = () => {
    let previousPage = page - 1;
    setPage(previousPage);
  };

  //loading
  if (isFetching === true) {
    return <h3>...Loading list of characters</h3>;
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

      <button onClick={handlePreviousPage} className="list-btn">
        Previous page
      </button>
      <button onClick={handleNextPage} className="list-btn">
        Next page
      </button>
    </div>
  );
}

export default CharactersList;
