import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DisplaySearch({tweetSearching}) {

  // const [url, setUrl] = useState();  

  useEffect(() => {
    const getTweet = async () => {
      const response = await axios.get(`https://api.twitter.com/1.1/search/tweets.json?q=${tweetSearching}`);
      const tweetID = response.status.id;
      return console.log(response)

    }
    getTweet();

  }, [])

    return (
      <div></div>
    )
  }


export default DisplaySearch;