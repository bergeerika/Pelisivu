

/*const [games, setGames] = useState([]);

const addGamesHandler = async (game) => {
  console.log(game);
  const response = await fetch(
    "https://harkka-348f1-default-rtdb.europe-west1.firebasedatabase.app//games.json",
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
    "https://harkka-348f1-default-rtdb.europe-west1.firebasedatabase.app//games.json"
  );
  const data = await response.json();

  const fetchedGames = [];

  for (const key in data) {
    fetchedGames.push({
      id: key,
      text: data[key].text,
      name: data[key].name,
    });
  }

  setGames(fetchedGames);
};

useEffect(() => {
  fetchGames();
}, []);*/


