import React, {useState, useEffect} from 'react';
import Nav from './Components/Nav'
import Header from './Components/Header'
import axios from 'axios';


function App() {
  const [name, setName] = useState("unknown");

  useEffect(() =>{
    axios.get('/api/name').then(response => {
      setName(response.data.name)
    })
  }, [])

  return (
    <div className="App">
      <p>{name} is the best</p>
      <Header />
      <Nav />
    </div>
  );
}

export default App;
