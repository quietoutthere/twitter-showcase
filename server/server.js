const express = require('express');
const app = express();
const axios = require('axios');
const port = 3001;

require('dotenv').config()

const token = process.env.BEARER_TOKEN;
let baseUrl = 'https://api.twitter.com/1.1/search/tweets.json?q=lexfridman';

app.get('/', (req, res) => {
  const authAxios = axios.create({
    baseUrl: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  authAxios.get(baseUrl) 
   .then((response) => {
    console.log(response.data.statuses);
    res.json(response.data.statuses[0].id);
   }) .catch((error) => {
    console.log(error)
    res.sendStatus(500);
   })
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

