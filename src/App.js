
//import './App.css';
import { BrowserRouter as  Switch, Route } from "react-router-dom";
//import { useEffect } from "react";
import GameList from './Navbar/GameList';
//import GameDetail from './components/GameDetail';
import AddGames from './Navbar/AddGames'
import Navbar from './components/Navbar';
import Forum from './Navbar/Forum';



const App = () => {

  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <GameList /> 
        </Route>
        <Route path="/AddGames">
          <AddGames />
        </Route>
        <Route path="/Forum">
          <Forum  />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

