const express = require('express');
const app = express();
const axios = require('axios');
const port = 3001;

require('dotenv').config();

app.get('/', (req, res) => {
    const auth = 'AAAAAAAAAAAAAAAAAAAAAK4mlgEAAAAAW7D%2Briplp2Sy9h%2Bf4BqGEC5iXuE%3D0PEeKstHIrFwEJpHcZSR88htZOIBqJgLBHTAzF3b2FFvhmaVvN'
    const response = axios({
      method: 'get',
      url: 'https://api.twitter.com/1.1/search/tweets.json?q=lexfridman',
      headers: {
        "bearer": auth,
      }

    })
    res.send(response)
});

 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

