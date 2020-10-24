import React from "react";
import './search-box.style.css'

export const SearchBox = ({placeholder, handlechange}) => (
    <input
        placeholder={placeholder}
        type='search'
        onChange={handlechange}/>
    )

export default SearchBox