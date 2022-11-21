
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { useEffect } from "react";
import Home from './components/Home';
import GameDetail from './components/GameDetail';
import AddGames from './components/AddGames';



function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GameDetail" element={<GameDetail />} />
          <Route path="/AddGames" element={<AddGames/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
