import "../components/App.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const GameList = (props) => {

  return (
    <div className="body ">
      <main className="layout ">
        <h2>Games</h2>
        <ul className="grid gallery">
          {props.games.map((game) => (
            <div key={game.id}>
              <Paper
                sx={{
                  p: 2,
                  margin: "auto",
                  maxWidth: 200,
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          {game.name}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography sx={{ width: 130, height: 160 }}>
                          <img src={game.img} alt="" />
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography>
                          <Link to={`/GameDetail/${game.name}`}>
                            <h5>Details</h5>
                          </Link>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          ))}
        </ul>
      </main>
    </div>
  );
 
};

export default GameList;
