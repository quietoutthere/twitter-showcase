import React, {useState} from 'react';
import DisplaySearch from './DisplaySearch';
import axios from 'axios';

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
        console.log(tweetSearching);
        
        axios.post('http://localhost:5000/search', { search: tweetSearch})
            .then(response => {
                console.log(response.data);
        })  .catch(error => {
                console.log(error);
        })
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