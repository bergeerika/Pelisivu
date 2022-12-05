import "./App.css";
import { useParams } from "react-router-dom";

const GameDetail = (props) => {
let { game_id } = useParams();

  return (
    <div className="body">
      <main className="layout ">
        <h1>Details</h1>

        <ul className="details">
          {props.games.map(
            (game) =>
              game.name === game_id && (
                <div key={game.id}>
                  <img src={game.img} alt="" class="myImage" />
                  <h2> Game Name: {game.name}</h2>
                  <h2>Developer: {game.dev}</h2>
                  <h2>Platform: {game.plat}</h2>
                  <h2>Release Date: {game.rel}</h2>
                  <h2> Game Description: {game.desc}</h2>
                  <br></br>
                </div>
              )
          )}
        </ul>
      </main>
    </div>
  );
};

export default GameDetail;