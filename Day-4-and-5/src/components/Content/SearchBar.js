import React,{useState} from "react";
import "./SearchBox.css";

const SearchBar = () => {
const [inputValue,setInputValue] = useState("")
  const findRestaurant = () =>{

  }
  
  const handleChange = (e) =>{
    e.preventDefault();
    setInputValue(e.target.value)
  }
  
  return (
    <div>
      <input
        className="search-input"
        type="search"
        id="search"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search for restaurants..."
      />
      <button onClick={findRestaurant}>Search</button>
    </div>
  );
};

export default SearchBar;
