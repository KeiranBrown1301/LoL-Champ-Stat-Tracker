import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [champs, setChamps] = useState([]);

  useEffect(() => {
    fetch("http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setChamps(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <h1>LoL Champ Stat Tracker</h1>
        </header>
        <div>
          <p>
            <i>
              Lol Champ Stat Tracker isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
            </i>
          </p>
        </div>
      </div>
    )
  }
}

export default App;
