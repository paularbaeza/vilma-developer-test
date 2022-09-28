import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CharacterDetails() {
  const { name } = useParams();

  const [characterDetails, setCharactersDetails] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const navigate = useNavigate();


  //useEffect calling the getCharactersDetails function when the component mounts and update it every time the name changes (params)
  useEffect(() => {
    getCharactersDetails();
  }, [name]);

  //get the character details from the API
  const getCharactersDetails = async () => {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/people?search=${name}`
      );
      setCharactersDetails(response.data.results[0]);
      setIsFetching(false)
    } catch {
      navigate("/error");
    }
  };

  // loading
  if (isFetching === true) {
    return <h3>...Loading character's details</h3>;
  }

  return (
    <div id="list-details">
      <div id="character-details">
        <h1>{characterDetails.name}</h1>
        <p>
          <b>Height:</b> {characterDetails.height}
        </p>
        <p>
          <b>Mass: </b> {characterDetails.mass}
        </p>
        <p>
          <b>Birth Year:</b> {characterDetails.birth_year}
        </p>
        <p>
          <b>Hair color:</b> {characterDetails.hair_color}
        </p>
        <p>
          <b>Skin color:</b> {characterDetails.skin_color}
        </p>
        <p>
          <b>Gender:</b> {characterDetails.gender}
        </p>
      </div>
    </div>
  );
}

export default CharacterDetails;
