const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello Evan!')
});

app.get('/api/name', (req, res) => {
    const response = {
        name: 'Evan'
    }
    
    res.send(response)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});