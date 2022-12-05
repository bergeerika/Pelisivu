import "./App.css";
import { useHistory } from "react-router-dom";

const GameDetail = () => {
const history = useHistory();

const GameList = () => {
  history.push("/");
};

  return (
    <div className="body">
      <main className="layout ">
        <h1>Details</h1>

        <button onClick={GameList}>Go Back</button>
      </main>
    </div>
  );
};

export default GameDetail;
