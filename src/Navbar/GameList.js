import "../components/App.css";

const GameList = (props) => {

  return (
    <div className="body">
      <h1>Games</h1>

      <ul>
        {props.games.map((game) => (
          <div key={game.id}>
            <h2>{game.text}</h2>
            <img src={game.img} alt="" />
            <br></br>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
