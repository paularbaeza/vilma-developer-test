import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom";



function CharactersList() {
  
  const [charactersList, setCharactersList] = useState ([])
  const [isFetching, setIsFetching] = useState (true)


  const navigate = useNavigate();


  useEffect(() => {
    getCharactersList();
  }, []);

  const getCharactersList = async () => {

    try{
      const response = await axios.get("https://swapi.dev/api/people")
      setCharactersList(response.data.results)
      setIsFetching(false)

    }catch {
      navigate("/error");
    }

  }

  //manejo de la seccion de loading
  if(isFetching === true) {
    //si el componente está buscando data
    return <h3>...Loading</h3>
}

  return (
    <div id="characters-list">
    {charactersList.map((eachCharacter) => {
      return (
        <div id="each-character" key={eachCharacter.name}>
        <Link to={`/${eachCharacter.name}/details`} className="no-deco">{eachCharacter.name}</Link>
        
        </div>
        
      )
    })}
    </div>
  )
}

export default CharactersList