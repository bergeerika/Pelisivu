import "./App.css";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const GameDetail = (props) => {
  let { game_id } = useParams();

  const history = useHistory();

  const GameList = () => {
    history.push("/");
  };

  return (
    <div className="body">
      <main className="layout ">
        <h1>Details</h1>

        <button onClick={GameList}>Go Back</button>

        <ul className="details">
          {props.games.map(
            (game) =>
              game.name === game_id && (
                <div key={game.id}>
                  <img src={game.img} alt="" class="myImage" />
                  <h3> Game Name: {game.name}</h3>
                  <h3>Developer: {game.dev}</h3>
                  <h3>Platform: {game.plat}</h3>
                  <h3>Release Date: {game.rel}</h3>
                  <h3> Game Description: {game.desc}</h3>
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