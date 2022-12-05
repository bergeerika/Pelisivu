import "./App.css";
import { useParams } from "react-router-dom";

const GameDetail = (props) => {
let { game_id } = useParams();

  return (
    <div className="body">
      <main className="layout ">
        <h1>Details</h1>

        <ul>
          {props.games.map(
            (game) =>
              game.name === game_id && (
                <div key={game.id}>
                  <img src={game.img} alt="" />
                  <h2>{game.name}</h2>
                  <h2>{game.dev}</h2>
                  <h2>{game.plat}</h2>
                  <h2>{game.rel}</h2>
                  <h2>{game.desc}</h2>
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

     /*name: data[key].name,
        dev: data[key].dev,
        plat: data[key].plat,
        rel: data[key].rel,
        desc: data[key].desc,
        img: data[key].img,
        <img src={game.data.img} alt="" />*/