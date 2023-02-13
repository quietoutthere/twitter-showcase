const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const port = 5000;

require('dotenv').config()

const token = process.env.BEARER_TOKEN;
let baseUrl = 'https://api.twitter.com/1.1/search/tweets.json?q=lexfridman';

app.use(cors());
app.use(express.json())
//add colon to slash to add a search paramater 
app.get('/', (req, res) => {

  
  const authAxios = axios.create({
    baseUrl: baseUrl, 
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  authAxios.request(baseUrl) 
   .then((response) => {
    // console.log(response.data.statuses);
    res.json(response.data.statuses[0].id);
   }) .catch((error) => {
    console.log(error)
    res.sendStatus(500);
   })

   
  
});

app.post('/search/', (req, res) => {
  const body = req.body;
  console.log(body);
  res.json(body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

