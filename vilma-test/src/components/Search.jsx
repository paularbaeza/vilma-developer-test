import { useState } from "react";

function Search(props) {
    const {filterCharacters} =props
    const [search, setSearch] = useState("")
    

    const handleSearch = (event) => {
    
        let inputSearchValue=event.target.value
        setSearch(inputSearchValue)
        
        //buscamos, filtramos
        //llevamos el valor del estado buscar a Shopping list
        filterCharacters(inputSearchValue)
    }
    


  return (
    <div>
    <div id="search">
          <input type="text" name="search"  value={search}/>
          <button onClick={handleSearch}>Search</button>
        </div>   

    

    
    </div>
  )
}

export default Search