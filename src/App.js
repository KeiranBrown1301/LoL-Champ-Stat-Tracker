import logo from './logo.svg';
import './App.css';

function App() {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false
    };
  }
  componentDidMount() {
    fetch(
      "http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        })
      })
  }

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
  );
}

export default App;
