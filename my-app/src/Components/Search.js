import React, {useState} from 'react';

function Search() {

    const [twitSearch, setTwitSearch] = useState('')

    const handleChange = (e) => {
        e.preventDefault();
        setTwitSearch(e.target.value);
        console.log(twitSearch)
    }

    return(
        <>
            <input type="text" 
            placeholder='Search a twit'
            value={twitSearch}
            id='input'
            onChange={handleChange}
            required/>
            <button>Twitify</button>
        </>

    )
}

export default Search;