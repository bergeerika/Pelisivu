import "../components/App.css";
//import List from "../components/ListTesti"

const GameList = (props) => {

  return (
    <div className="body ">
      <h1>Games</h1>
      <ul className="grid gallery">
        {props.games.map((game) => (
          <div key={game.id}>
            <h2>{game.name}</h2>
            <img src={game.img} alt="" />
            <br></br>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
