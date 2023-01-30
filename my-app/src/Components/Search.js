import React, {useState} from 'react';
import DisplaySearch from './DisplaySearch';

function Search() {

    const [tweetSearch, setTweetSearch] = useState('')
    const [tweetSearching, setTweetSearching] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setTweetSearch(e.target.value);
    }

    const fetchTweet = (e) => {
        e.preventDefault();
        setTweetSearching(tweetSearch);
        console.log(tweetSearching)
    }

    return(
        <>
            <input type="text" 
            placeholder='Search a twit'
            value={tweetSearch}
            id='input'
            onChange={handleChange}
            required/>
            <button
            onClick={fetchTweet}
            >Twitify
            </button>
            <DisplaySearch 
            tweetSearching = {tweetSearching}/>
        </>

    )
}

export default Search;