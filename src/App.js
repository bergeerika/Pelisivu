
//import './App.css';
import { BrowserRouter as  Switch, Route } from "react-router-dom";
//import { useEffect } from "react";
import Home from './components/Home';
import GameDetail from './components/GameDetail';
import AddGames from './components/AddGames';
import Navbar from './components/Navbar';


const App = () => {

  return (
    <div>
      <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/GameDetail">
            <GameDetail />
          </Route>
          <Route path="/AddGames">
             <AddGames />
           </Route>
          </Switch>
    </div>
  );
};

export default App;

