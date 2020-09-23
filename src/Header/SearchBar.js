import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBar(){
    return(
<div className="searchBarMain">
<input type="text" placeholder="Search Your favourite Products" className="searchBar" />
<FontAwesomeIcon icon={faSearch} />
</div>

    )
}

export default SearchBar