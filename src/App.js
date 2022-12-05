//import './App.css';
import { BrowserRouter as Switch, Route } from "react-router-dom";
//import { useEffect } from "react";
import GameList from "./Navbar/GameList";
//import GameDetail from './components/GameDetail';
import AddGames from "./Navbar/AddGames";
import Navbar from "./components/Navbar";
import Forum from "./Navbar/Forum";
import { useState, useEffect } from "react";

const App = () => {
  const [ games, setGames] = useState([]);

  const addGameHandler = async (game) => {
    console.log(game);
    const response = await fetch(
      "https://webharkka-e551c-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
      {
        method: "POST",
        body: JSON.stringify(game),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    fetchGames();
  };

  const fetchGames = async () => {
    const response = await fetch(
      "https://webharkka-e551c-default-rtdb.europe-west1.firebasedatabase.app/todos.json"
    );
    const data = await response.json();

    const fetchedGames = [];

    for (const key in data) {
      fetchedGames.push({
        id: key,
        name: data[key].name,
        dev: data[key].dev,
        plat: data[key].plat,
        rel: data[key].rel,
        img: data[key].img,
      });
    }

    setGames(fetchedGames);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <GameList games={games} />
        </Route>
        <Route path="/AddGames">
          <AddGames onAddGame={addGameHandler} />
        </Route>
        <Route path="/Forum">
          <Forum />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
