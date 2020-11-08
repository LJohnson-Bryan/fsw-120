import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './styles.css';
import { useState } from 'react';

const Search = () => {
    const [focusedForm, setFocusedForm] = useState(false); 
    return ( 
        <form className="search-form" onFocus={() => setFocusedForm(true)} onBlur={() => setFocusedForm(false)} >
            <span className="leftSearch" style={{color: focusedForm ? "#2680C2" : "#62B0E8"}}><FontAwesomeIcon icon={faSearch} /></span> <input type="text" placeholder="Search Twitter" />
        </form>
    );
}

export default Search;
