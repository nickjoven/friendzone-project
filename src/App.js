import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

// https://pokeapi.co/api/v2/pokemon/257

const App = () => {
  const [friends, setFriends] = useState([])
  useEffect(() => {
    const fetchFriends = async () => {
      let req = await fetch('http://localhost:3005/friends')
      let res = await req.json()
      setFriends(res)
      console.log(res)
    }
    fetchFriends()
  },[])

  return (
    <div className="App">
      <ul>
        {
          friends.map((element, index) => {
            return (
              <h3 key={index}>{element.name}</h3>
              )
            })
        }
        </ul>
    </div>
  );
}

export default App;
