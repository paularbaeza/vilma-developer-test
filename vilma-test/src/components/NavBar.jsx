import React from "react";
import { useState } from "react";


function NavBar() {


  // const [search,setSearch] = useState("")
    

  // const handleSearch = (event) => {
  
  //     let inputSearchValue = event.target.value
  //     console.log(inputSearchValue)
  //     setSearch(inputSearchValue)
  // }

  return (
    <div id="nav-bar">
      <p>Vilma Test</p>
      <div id="search">
        <input type="text"/>
        <button>Search</button>
      </div>
    </div>
  );
}

export default NavBar;
