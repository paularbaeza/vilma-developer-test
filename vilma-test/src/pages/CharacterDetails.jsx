import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

function CharacterDetails() {
  const { name } = useParams();

  const [characterDetails, setCharactersDetails] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getCharactersDetails();
  }, [name]);

  const getCharactersDetails = async () => {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/people?search=${name}`
      );
      setCharactersDetails(response.data.results[0]);
      setIsFetching(false);
    } catch {
      navigate("/error");
    }
  };

  //manejo de la seccion de loading
  if (isFetching === true) {
    //si el componente está buscando data
    return <h3>...Loading</h3>;
  }

  console.log(characterDetails);
  return (
    <div id="character-details">
      <h1>{characterDetails.name}</h1>
      <p><b>Height:</b> {characterDetails.height}</p>
      <p><b>Mass: </b> {characterDetails.mass}</p>
      <p><b>Birth Year:</b> {characterDetails.birth_year}</p>
      <p><b>Hair color:</b> {characterDetails.hair_color}</p>
      <p><b>Skin color:</b> {characterDetails.skin_color}</p>
      <p><b>Gender:</b> {characterDetails.gender}</p>
    </div>
  );
}

export default CharacterDetails;
